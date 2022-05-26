/**
Copyright 2021 Forestry.io Holdings, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { TinaField } from '@tinacms/graphql'
import prettier from 'prettier'
import { TinaSchema } from '@tinacms/schema-tools'
import { sdkString } from './sdkString'
import { buildTypes2 } from './types'

export const createClient = async (ctx: any) => {
  const schemaImportStatement = `import schema from "./__generated__/_schema.json"`
  return createClientInner(ctx, schemaImportStatement)
}
export const createClientInner = async (
  ctx: { tinaSchema: TinaSchema },
  schemaImportStatement
) => {
  const types = await buildTypes(ctx.tinaSchema)
  const res = prettier.format(
    `/* eslint-disable */
${schemaImportStatement}
${types}
`,
    { parser: 'typescript' }
  )

  return res
}

const buildFieldType = (field: TinaField) => {
  switch (field.type) {
    case 'object':
      const opts = []
      if (field.fields) {
        if (typeof field.fields === 'string') {
          throw new Error('Global templates not supported')
        }
        field.fields.forEach((field) => {
          opts.push(field.name)
        })
      } else {
        field.templates.forEach((template) => {
          if (typeof template === 'string') {
            throw new Error('Global templates not supported')
          }
          opts.push(template.name)
        })
      }
      return `boolean | { ${opts.map((o) => `${o}?: boolean`)} }`
    case 'reference':
      return `boolean`
    default:
      return true
  }
}

const buildFieldTypeStatement = (field) =>
  `${field.name}?: ${buildFieldType(field)}`

const buildReferenceTypeStatement = (f) => {
  return `${f.name}?: boolean | {${f.collections
    .map((col) => `${col}: {fields?: ${col}Fields, include?: ${col}References}`)
    .join(', ')}
  }`
}

const buildCollectionTypes = (collection) => {
  return `
${buildTypes2(collection)}
type ${collection.name}Fields = { ${collection.fields
    .map(buildFieldTypeStatement)
    .join(', ')} }

type ${collection.name}References = { ${collection.fields
    .filter((f) => f.type === 'reference')
    .map(buildReferenceTypeStatement)
    .join(', ')}}

type ${collection.name}Options= {
  fields?: ${collection.name}Fields;
  include?: ${collection.name}References;
}

type ${collection.name}Return<
  T extends ${collection.name}Fields | undefined,
  B extends ${collection.name}References
> = T extends object
  ? {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof ${collection.name}Type
          ? ${collection.name}Type[Key]
          : never
        : never;
    }
  : ${collection.name}Type<B>;

function ${collection.name}<
  T extends ${collection.name}Fields | undefined,
  B extends ${collection.name}References
>(args: { relativePath: string; fields?: never; include?: B }): ${
    collection.name
  }Type<B>;
function ${collection.name}<
  T extends ${collection.name}Fields | undefined,
  B extends ${collection.name}References
>(args: {
  relativePath: string;
  fields?: T;
  include?: never;
}): {
  [Key in keyof T]: T[Key] extends true
    ? Key extends keyof ${collection.name}Type
      ? ${collection.name}Type[Key]
      : never
    : never;
};
function ${collection.name}<T extends ${
    collection.name
  }Fields | undefined, B extends ${collection.name}References>(
  args:
    | {
        relativePath: string;
        fields?: T;
        include?: never;
      }
    | {
        relativePath: string;
        fields?: never;
        include?: B;
      }
):
  | ${collection.name}Type<B>
  | {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof ${collection.name}Type
          ? ${collection.name}Type[Key]
          : never
        : never;
    } {
  return {} as any;
}
function ${collection.name}Connection<
  T extends ${collection.name}Fields | undefined,
  B extends ${collection.name}References
>(args: { first: string; fields?: never; include?: B }): {edges: {node: ${
    collection.name
  }Type<B>}[]};
function ${collection.name}Connection<
  T extends ${collection.name}Fields | undefined,
  B extends ${collection.name}References
>(args: {
  first: string;
  fields?: T;
  include?: never;
}): {
  edges: {
    node: {[Key in keyof T]: T[Key] extends true
    ? Key extends keyof ${collection.name}Type
      ? ${collection.name}Type[Key]
      : never
    : never}
  }[]
};
function ${collection.name}Connection<T extends ${
    collection.name
  }Fields | undefined, B extends ${collection.name}References>(
  args:
    | {
        first: string;
        fields?: T;
        include?: never;
      }
    | {
        first: string;
        fields?: never;
        include?: B;
      }
):
{
  edges: {
    node:  | ${collection.name}Type<B>
  | {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof ${collection.name}Type
          ? ${collection.name}Type[Key]
          : never
        : never;
    }
  }[]
} {
  return {} as any;
}`
}

const buildTypes = (tinaSchema: TinaSchema) => {
  const collections = tinaSchema.getCollections()
  const collectionTypes = []
  tinaSchema.getCollections().map((collection) => {
    collectionTypes.push(buildCollectionTypes(collection))
  })
  const s = `
  ${collectionTypes.join('\n')}

  type Collection = {
    ${collections.map((c) => `${c.name}: typeof ${c.name}`).join(',\n')}
    ${collections
      .map((c) => `${c.name}Connection: typeof ${c.name}Connection`)
      .join(',\n')}
  }

${sdkString}
  `

  return s
}
