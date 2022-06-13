/* eslint-disable */
const schema = {
  collections: [
    {
      name: 'post',
      path: '',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
          namespace: ['post', 'title'],
        },
        { name: 'created', type: 'datetime', namespace: ['post', 'created'] },
        { name: 'featured', type: 'boolean', namespace: ['post', 'featured'] },
        {
          name: 'categories',
          type: 'string',
          list: true,
          namespace: ['post', 'categories'],
        },
        {
          name: 'author',
          type: 'reference',
          collections: ['author'],
          namespace: ['post', 'author'],
        },
      ],
      namespace: ['post'],
    },
    {
      name: 'author',
      path: '',
      fields: [{ name: 'name', type: 'string', namespace: ['author', 'name'] }],
      namespace: ['author'],
    },
  ],
  namespace: [],
}

type postType<R extends postReferences = {}> = {
  title: string
  created?: string
  featured?: boolean
  categories?: string[]
  author?: R['author'] extends true
    ? authorType
    : R['author'] extends { author: authorOptions }
    ? authorReturn<
        R['author']['author']['fields'],
        R['author']['author']['include']
      >
    : { id: string }
  _collection: 'post'
  _template: 'post'
  _sys: {
    filename: string
    basename: string
    breadcrumbs: string[]
    path: string
    relativePath: string
    extension: string
    template: string
    collection: { name: string; format: string }
    __typename: string
  }
}
type postFields = {
  title?: true
  created?: true
  featured?: true
  categories?: true
  author?: boolean
}

type postFilter = {
  title?: { eq?: string; startsWith?: string }
  created?: { eq?: string; startsWith?: string }
  featured?: { eq?: string; startsWith?: string }
  categories?: { eq?: string; startsWith?: string }
  author?: { author: authorFilter }
}

type postReferences = {
  author?:
    | boolean
    | { author: { fields?: authorFields; include?: authorReferences } }
}

type postOptions = {
  fields?: postFields
  include?: postReferences
}

type postReturn<
  T extends postFields | undefined,
  B extends postReferences
> = T extends object
  ? {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof postType
          ? postType[Key]
          : never
        : never
    }
  : postType<B>

function post<
  T extends postFields | undefined,
  B extends postReferences
>(args: { relativePath: string; fields?: never; include?: B }): postType<B>
function post<
  T extends postFields | undefined,
  B extends postReferences
>(args: {
  relativePath: string
  fields?: T
  include?: never
}): {
  [Key in keyof T]: T[Key] extends true
    ? Key extends keyof postType
      ? postType[Key]
      : never
    : never
}
function post<T extends postFields | undefined, B extends postReferences>(
  args:
    | {
        relativePath: string
        fields?: T
        include?: never
      }
    | {
        relativePath: string
        fields?: never
        include?: B
      }
):
  | postType<B>
  | {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof postType
          ? postType[Key]
          : never
        : never
    } {
  return {} as any
}
function postConnection<
  T extends postFields | undefined,
  B extends postReferences
>(args?: {
  first?: number
  after?: string
  last?: number
  before?: string
  filter?: postFilter
  fields?: never
  include?: B
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
    node: postType<B>
  }[]
}
function postConnection<
  T extends postFields | undefined,
  B extends postReferences
>(args?: {
  first?: number
  after?: string
  last?: number
  before?: string
  filter?: postFilter
  fields?: T
  include?: never
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
    node: {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof postType
          ? postType[Key]
          : never
        : never
    }
  }[]
}
function postConnection<
  T extends postFields | undefined,
  B extends postReferences
>(
  args:
    | {
        first: string
        fields?: T
        include?: never
      }
    | {
        first: string
        fields?: never
        include?: B
      }
): {
  edges: {
    node:
      | postType<B>
      | {
          [Key in keyof T]: T[Key] extends true
            ? Key extends keyof postType
              ? postType[Key]
              : never
            : never
        }
  }[]
} {
  return {} as any
}

type authorType<R extends authorReferences = {}> = {
  name?: string
  _collection: 'author'
  _template: 'author'
  _sys: {
    filename: string
    basename: string
    breadcrumbs: string[]
    path: string
    relativePath: string
    extension: string
    template: string
    collection: { name: string; format: string }
    __typename: string
  }
}
type authorFields = { name?: true }

type authorFilter = { name?: { eq?: string; startsWith?: string } }

type authorReferences = {}

type authorOptions = {
  fields?: authorFields
  include?: authorReferences
}

type authorReturn<
  T extends authorFields | undefined,
  B extends authorReferences
> = T extends object
  ? {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof authorType
          ? authorType[Key]
          : never
        : never
    }
  : authorType<B>

function author<
  T extends authorFields | undefined,
  B extends authorReferences
>(args: { relativePath: string; fields?: never; include?: B }): authorType<B>
function author<
  T extends authorFields | undefined,
  B extends authorReferences
>(args: {
  relativePath: string
  fields?: T
  include?: never
}): {
  [Key in keyof T]: T[Key] extends true
    ? Key extends keyof authorType
      ? authorType[Key]
      : never
    : never
}
function author<T extends authorFields | undefined, B extends authorReferences>(
  args:
    | {
        relativePath: string
        fields?: T
        include?: never
      }
    | {
        relativePath: string
        fields?: never
        include?: B
      }
):
  | authorType<B>
  | {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof authorType
          ? authorType[Key]
          : never
        : never
    } {
  return {} as any
}
function authorConnection<
  T extends authorFields | undefined,
  B extends authorReferences
>(args?: {
  first?: number
  after?: string
  last?: number
  before?: string
  filter?: authorFilter
  fields?: never
  include?: B
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
    node: authorType<B>
  }[]
}
function authorConnection<
  T extends authorFields | undefined,
  B extends authorReferences
>(args?: {
  first?: number
  after?: string
  last?: number
  before?: string
  filter?: authorFilter
  fields?: T
  include?: never
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
    node: {
      [Key in keyof T]: T[Key] extends true
        ? Key extends keyof authorType
          ? authorType[Key]
          : never
        : never
    }
  }[]
}
function authorConnection<
  T extends authorFields | undefined,
  B extends authorReferences
>(
  args:
    | {
        first: string
        fields?: T
        include?: never
      }
    | {
        first: string
        fields?: never
        include?: B
      }
): {
  edges: {
    node:
      | authorType<B>
      | {
          [Key in keyof T]: T[Key] extends true
            ? Key extends keyof authorType
              ? authorType[Key]
              : never
            : never
        }
  }[]
} {
  return {} as any
}

type Collection = {
  post: typeof post
  author: typeof author
  postConnection: typeof postConnection
  authorConnection: typeof authorConnection
}

const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const generateNamespacedFieldName = (names: string[], suffix: string = '') => {
  return (suffix ? [...names, suffix] : names).map(capitalize).join('')
}

const connectionFragment = `fragment ConnectionFragment on Connection {
  totalCount
  pageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
  ...on DocumentConnection {
    edges {
      cursor
      node {
        ...on Document {
          id
        }
      }
    }
  }
}`

const systemFragment = `fragment SystemInfo on Document {
  id
  _sys {
    filename
    basename
    breadcrumbs
    path
    relativePath
    extension
    template
    collection {
      name
      format
    }
  }
  __typename
}`

export const query = <
  B,
  A extends keyof Collection,
  T extends ReturnType<Collection[A]>,
  C extends { [Key in keyof B]: T }
>(
  callback: (sdk: Collection) => C
): Promise<{ data: C; errors?: object[]; query: string }> => {
  const cb = {}
  let addSystemFragment = false
  let addConnectionFragment = false

  const addField = (field: any, options: any): any => {
    switch (field.type) {
      case 'object':
        if (field.fields) {
          const f = addFields(field.fields, options)
          return `${field.name} { __typename
          ${f}
       }`
        } else {
          return `${field.name} { __typename
            ${field.templates.map((template: any) => {
              const f = addFields(template.fields, options)
              return `...on ${generateNamespacedFieldName(template.namespace)} {
                ${f}
              }`
            })}
       }`
        }
      case 'reference':
        if (options?.include) {
          if (Object.keys(options.include).includes(field.name)) {
            const referencedCollections = field.collections.map((col: any) =>
              schema.collections.find((c) => c.name === col)
            )
            if (options.include[field.name] === true) {
              return `${field.name} {
                ...SystemInfo
                ${referencedCollections.map((collection: any) => {
                  const f = addFields(collection.fields, options)
                  return `...on ${generateNamespacedFieldName(
                    collection.namespace
                  )} {
                    ${f}
                  }`
                })}
              }`
            }
            let referenceSelections = []
            referencedCollections.map((collection) => {
              console.log(options.include[field.name][collection.name])
              const f = addFields(
                collection.fields,
                options.include[field.name][collection.name]
              )
              referenceSelections.push(`...on ${generateNamespacedFieldName(
                collection.namespace
              )} {
                ${f}
              }`)
            })
            return `${field.name} {
              __typename
              ${referenceSelections.join('\n')}
            }`
          }
        }
        return `${field.name} {
        ...on Document {
          id
        }
       }`

      default:
        return field.name
    }
  }

  const addFields = (fields: any[], options: any): any => {
    if (options?.fields) {
      const f: any = []
      Object.entries(options.fields).forEach(([k, v]) => {
        if (v) {
          const ff = fields.find((field) => field.name === k)
          if (ff) {
            f.push(ff)
          } else {
            throw new Error(`oops: ${k}`)
          }
        }
      })
      fields = f
    }

    return fields.map((f) => addField(f, options)).join('\n')
  }

  const buildFieldFilter = (field, value) => {
    switch (field.type) {
      case 'reference':
        let referenceFilters = '{'
        Object.entries(value).forEach(([collectionName, args]) => {
          const collection = schema.collections.find(
            (c) => c.name === collectionName
          )
          referenceFilters =
            referenceFilters +
            `${collection.name}:${buildFilters(collection, args)}`
        })
        referenceFilters = referenceFilters + '}'
        return referenceFilters
      case 'string':
        let stringFilters = '{'
        Object.entries(value).forEach(([filterKey, filterValue]) => {
          stringFilters = stringFilters + `${filterKey}: "${filterValue}"`
        })
        return (stringFilters = stringFilters + '}')
        return stringFilters
      default:
        return `{ eq: "default"}`
    }
  }

  const buildFilters = (collection, args) => {
    let filter = '{'
    Object.entries(args).forEach(([key, value]) => {
      const field = collection.fields.find((field) => field.name === key)
      filter = filter + `${key}: ${buildFieldFilter(field, value)}`
    })
    filter = filter + '}'
    return filter
  }
  const docName = (collection: any, args: any, list?: boolean) => {
    const name = collection.name
    if (!list) {
      return `${name}${list ? 'Connection' : ''}(relativePath: "${
        args.relativePath
      }")`
    }
    let connectionArgs = ''
    if (args) {
      const { include, fields, ...queryArgs } = args
      if (Object.keys(queryArgs).length > 0) {
        connectionArgs = '('
        Object.entries(queryArgs).forEach(([key, value], index) => {
          if (!['include', 'fields'].includes(key)) {
            let val = ''
            if (['first', 'last'].includes(key)) {
              val = value
            } else {
              val = `"${value}"`
            }
            if (key === 'filter') {
              connectionArgs =
                connectionArgs + `filter: ${buildFilters(collection, value)}`
            } else {
              connectionArgs = connectionArgs + `${key}: ${val},`
            }
          }
        })
        connectionArgs = connectionArgs + ')'
      }
    }
    return `${name}${list ? 'Connection' : ''}${connectionArgs}`
  }

  const buildCol = (collection: any, args: any) => {
    if (collection.templates) {
      throw new Error('no templates supported')
    }
    if (typeof collection.fields === 'string') {
      throw new Error('no global templates supported')
    }
    const f = addFields(collection.fields, args)
    if (!args?.fields) {
      addSystemFragment = true
    }

    const maybeSystemInfo = args?.fields ? '' : '...SystemInfo'

    return `${docName(collection, args)} {
${maybeSystemInfo}
${f}
}`
  }
  const buildColConnection = (collection: any, args: any) => {
    if (collection.templates) {
      throw new Error('no templates supported')
    }
    if (typeof collection.fields === 'string') {
      throw new Error('no global templates supported')
    }
    addConnectionFragment = true
    const f = addFields(collection.fields, args)
    return `${docName(collection, args, true)} {
...ConnectionFragment
edges { node {
  ${f}
} }
}`
  }

  schema.collections.forEach((collection: any) => {
    // @ts-ignore
    cb[collection.name] = (args) => {
      return buildCol(collection, args)
    }
    cb[`${collection.name}Connection`] = (args) => {
      return buildColConnection(collection, args)
    }
  })
  // @ts-ignore
  const query = callback(cb)

  let queryString = `
query {`
  Object.entries(query).forEach(([key, value]) => {
    queryString =
      queryString +
      `${key}: ${value}
`
  })
  queryString = queryString + `}`
  if (addSystemFragment) {
    queryString = queryString + `${systemFragment}`
  }
  if (addConnectionFragment) {
    queryString = queryString + `${connectionFragment}`
  }

  return fetch('http://localhost:4001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryString,
    }),
  })
    .then(async (res) => {
      const json = await res.json()
      return {
        query: queryString,
        ...json,
      }
    })
    .catch(async (e) => {
      return {
        query: queryString,
        errors: e.message,
      }
    })
}

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any
