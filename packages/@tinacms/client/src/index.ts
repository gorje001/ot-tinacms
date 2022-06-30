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

import prettier from 'prettier'
import {
  TinaSchema,
  TinaCloudCollection,
  TinaFieldEnriched,
} from '@tinacms/schema-tools'
import { sdkString } from './sdkString'
import { buildTypes2 } from './types'

type TinaField = TinaFieldEnriched

type Collection = TinaCloudCollection<true>

export const createClient = async (ctx: any) => {
  const schemaImportStatement = `import schema from "./__generated__/_schema.json"`
  return createClientInner(ctx, schemaImportStatement)
}
export const createClientInner = async (
  ctx: { tinaSchema: TinaSchema },
  schemaImportStatement: string,
  jsOnly = false
) => {
  const types = await buildTypes(ctx.tinaSchema, jsOnly)
  const res = prettier.format(
    `/* eslint-disable */
// @ts-nocheck
${schemaImportStatement}
${types}
`,
    { parser: 'typescript' }
  )

  return res
}

const buildFieldFilter = (field: TinaField) => {
  switch (field.type) {
    case 'object':
      const opts: string[] = []
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
      let filter = `{`
      field.collections.forEach((collection) => {
        filter = filter + `${collection}: ${collection}Filter;`
      })

      filter = filter + `}`
      return filter
    default:
      return `{eq?: string, startsWith?: string}`
  }
}
const buildFieldType = (field: TinaField) => {
  switch (field.type) {
    case 'object':
      const opts: string[] = []
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

export const buildFieldFilterStatement = (field: TinaField) =>
  `${field.name}?: ${buildFieldFilter(field)}`

export const buildFieldTypeStatement = (field: TinaField) =>
  `${field.name}?: ${buildFieldType(field)}`

const buildReferenceTypeStatement = (
  f: Extract<TinaField, { type: 'reference' }>
) => {
  const namespace = f.namespace.slice(1)
  return `${
    namespace.length > 1 ? `"${namespace.join('.')}"` : f.name
  }?: boolean | {${f.collections
    .map((col) => `${col}: {fields?: ${col}Fields, include?: ${col}References}`)
    .join(', ')}
  }`
}

const getReferencesInObject = (
  field: Extract<TinaField, { type: 'object' }>
) => {
  const references: Extract<TinaField, { type: 'reference' }>[] = []
  if (field.fields) {
    if (typeof field.fields === 'string') {
      throw new Error('Global templates not supported')
    }
    field.fields.forEach((field) => {
      if (field.type === 'object') {
        const nestedReferences = getReferencesInObject(field)
        nestedReferences.forEach((ref) => {
          references.push(ref)
        })
      }
      if (field.type === 'reference') {
        references.push(field)
      }
    })
  }
  return references
}

const getReferencesInCollection = (collection: Collection) => {
  const references: Extract<TinaField, { type: 'reference' }>[] = []
  if (collection.fields) {
    collection.fields.forEach((field) => {
      if (field.type === 'object') {
        const nestedReferences = getReferencesInObject(field)
        nestedReferences.forEach((ref) => {
          references.push(ref)
        })
      }
      if (field.type === 'reference') {
        references.push(field)
      }
    })
  }
  return references
}

export const buildCollectionFieldsStatement = (collection: Collection) => {
  return `type ${collection.name}Fields = { ${collection.fields
    .map(buildFieldTypeStatement)
    .join(', ')} }
    `
}
export const buildCollectionFilterStatement = (collection: Collection) => {
  return `type ${collection.name}Filter= { ${collection.fields
    .map(buildFieldFilterStatement)
    .join(', ')}}
    `
}
export const buildCollectionReferenceStatement = (collection: Collection) => {
  const referenceFields = getReferencesInCollection(collection)
  return `type ${collection.name}References = { ${referenceFields
    .map(buildReferenceTypeStatement)
    .join(', ')}}
`
}
export const buildCollectionOptionsStatement = (collection: Collection) => {
  return `type ${collection.name}Options= {
    fields?: ${collection.name}Fields;
    include?: ${collection.name}References;
  }
`
}
export const buildCollectionReturnStatement = (collection: Collection) => {
  return `type ${collection.name}Return<
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
  `
}

const buildCollectionTypes = (collection: Collection) => {
  return `
${buildTypes2(collection)}
${buildCollectionFieldsStatement(collection)}
${buildCollectionFilterStatement(collection)}
${buildCollectionReferenceStatement(collection)}
${buildCollectionOptionsStatement(collection)}
${buildCollectionReturnStatement(collection)}

type ${
    collection.name
  }ArgsForInclude<B> = { relativePath: string; fields?: never; include?: B }
type ${collection.name}ArgsForFields<T> = {
  relativePath: string;
  fields?: T;
  include?: never;
}

function ${collection.name}<
  T extends ${collection.name}Fields | undefined,
  B extends ${collection.name}References
>(args: ${collection.name}ArgsForInclude<B>): ${collection.name}Type<B>;
function ${collection.name}<
  T extends ${collection.name}Fields | undefined,
  B extends ${collection.name}References
>(args: ${collection.name}ArgsForFields<T>): {
  [Key in keyof T]: T[Key] extends true
    ? Key extends keyof ${collection.name}Type
      ? ${collection.name}Type[Key]
      : never
    : never;
};
function ${collection.name}<T extends ${
    collection.name
  }Fields | undefined, B extends ${collection.name}References>(
  args: ${collection.name}ArgsForInclude<B> | ${collection.name}ArgsForFields<T>
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
>(args?: { first?: number; after?: string; last?: number; before?: string; filter?: ${
    collection.name
  }Filter, fields?: never; include?: B }): {
    totalCount: number
    pageInfo: {
      hasPreviousPage: boolean
      hasNextPage: boolean
      startCursor: string
      endCursor: string
    }
    edges: {
      cursor: string
      node: ${collection.name}Type<B>
    }[]
  };
function ${collection.name}Connection<
  T extends ${collection.name}Fields | undefined,
  B extends ${collection.name}References
>(args?: {
  first?: number; after?: string; last?: number; before?: string;
  filter?: ${collection.name}Filter
  fields?: T;
  include?: never;
}): {
  totalCount: number
  pageInfo: {
    hasPreviousPage: boolean
    hasNextPage: boolean
    startCursor: string
    endCursor: string
  }
  edges: {
    cursor: string
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

export const buildTypes = (tinaSchema: TinaSchema, jsOnly?: boolean) => {
  const collections = tinaSchema.getCollections()
  const collectionTypes: string[] = []
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
