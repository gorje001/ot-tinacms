export const sdkString = `
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const generateNamespacedFieldName = (names, suffix = '') => {
  return (suffix ? [...names, suffix] : names).map(capitalize).join('')
}

const connectionFragment = \`fragment ConnectionFragment on Connection {
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
}\`

const systemFragment = \`fragment SystemInfo on Document {
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
}\`

const fieldSlug = (field) => {
  const namespace = field.namespace.slice(1)
  return namespace.length > 1 ? namespace.join('.') : field.name
}

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

  const addField = (field, options) => {
    switch (field.type) {
      case 'object':
        if (field.fields) {
          const f = addFields(field.fields, options)
          return \`\${field.name} {
          \${f}
       }\`
        } else {
          return \`\${field.name} {
            \${field.templates.map((template) => {
              const f = addFields(template.fields, options)
              return \`...on \${generateNamespacedFieldName(template.namespace)} {
                \${f}
              }\`
            })}
       }\`
      }
      case 'reference':
        if (options?.include) {
          if (Object.keys(options.include).includes(fieldSlug(field))) {
            const referencedCollections = field.collections.map((col: any) =>
              schema.collections.find((c) => c.name === col)
            )
            if (options.include[fieldSlug(field)] === true) {
              return \`\${field.name} {
                ...SystemInfo
                \${referencedCollections.map((collection: any) => {
                  const f = addFields(collection.fields, options)
                  return \`...on \${generateNamespacedFieldName(
                    collection.namespace
                  )} {
                    \${f}
                  }\`
                })}
              }\`
            }
            let referenceSelections = []
            referencedCollections.map((collection) => {
              console.log(options.include[field.name][collection.name])
              const f = addFields(
                collection.fields,
                options.include[field.name][collection.name]
              )
              referenceSelections.push(\`...on \${generateNamespacedFieldName(
                collection.namespace
              )} {
                \${f}
              }\`)
            })
            return \`\${field.name} {
              \${referenceSelections.join('\\n')}
            }\`
          }
        }
        return \`\${field.name} {
        ...on Document {
          id
        }
       }\`

      default:
        return field.name
    }
  }

  const addFields = (fields, options) => {
    if (options?.fields) {
      const f = []
      Object.entries(options.fields).forEach(([k, v]) => {
        if (v) {
          const ff = fields.find((field) => field.name === k)
          if (ff) {
            f.push(ff)
          } else {
            throw new Error(\`oops: \${k}\`)
          }
        }
      })
      fields = f
    }

    return fields.map((f) => addField(f, options)).join('\\n')
  }

  const buildFieldFilter = (field, value) => {
    switch(field.type) {
      case "reference":
        let referenceFilters = "{"
        Object.entries(value).forEach(([collectionName, args]) => {
          const collection = schema.collections.find((c) => c.name === collectionName)
          referenceFilters = referenceFilters + \`\${collection.name}:\${buildFilters(collection, args)}\`
        })
        referenceFilters = referenceFilters + "}"
        return referenceFilters
      case "string":
        let stringFilters = "{"
        Object.entries(value).forEach(([filterKey, filterValue]) => {
          stringFilters = stringFilters + \`\${filterKey}: "\${filterValue}"\`
        })
        return stringFilters = stringFilters + "}"
        return stringFilters
      default:
        return \`{ eq: "default"}\`
    }
  }

  const buildFilters = (collection, args) => {
    let filter = "{"
    Object.entries(args).forEach(([key, value]) => {
      const field = collection.fields.find(field => field.name === key)
      filter = filter + \`\${key}: \${buildFieldFilter(field, value)}\`
    })
    filter = filter + "}"
    return filter
  }
  const docName = (collection, args, list) => {
    const name = collection.name
    if (!list) {
      return \`\${name}\${
        list ? 'Connection' : ''
      }(relativePath: "\${args.relativePath}")\`
    }
    let connectionArgs = ''
    if(args) {
      const {include, fields,...queryArgs} = args
      if(Object.keys(queryArgs).length > 0) {
        connectionArgs = "("
        Object.entries(queryArgs).forEach(([key, value], index) => {
          if(!['include', 'fields'].includes(key)) {
            let val = ''
            if(["first", "last"].includes(key)) {
              val = value
            } else {
              val = \`"\${value}"\`
            }
            if(key === 'filter') {
              connectionArgs = connectionArgs + \`filter: \${buildFilters(collection, value)}\`
            } else {
              connectionArgs = connectionArgs + \`\${key}: \${val},\`
            }
          }
        })
       connectionArgs = connectionArgs + ")"
      }
    }
    return \`\${name}\${list ? 'Connection' : ''}\${connectionArgs}\`
  }

  const buildCol = (collection, args) => {
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

    return \`\${docName(collection, args)} {
\${maybeSystemInfo}
\${f}
}\`
  }
  const buildColConnection = (collection, args) => {
    if (collection.templates) {
      throw new Error('no templates supported')
    }
    if (typeof collection.fields === 'string') {
      throw new Error('no global templates supported')
    }
    addConnectionFragment = true
    const f = addFields(collection.fields, args)
    return \`\${docName(collection, args, true)} {
...ConnectionFragment
edges { node {
  \${f}
} }
}\`
  }

  schema.collections.forEach((collection: any) => {
    cb[collection.name] = (args) => {
      return buildCol(collection, args)
    }
    cb[\`\${collection.name}Connection\`] = (args) => {
      return buildColConnection(collection, args)
    }
  })
  const query = callback(cb)

  let queryString = \`
query {\`
  Object.entries(query).forEach(([key, value]) => {
    queryString = queryString + \`\${key}: \${value}\n\`
  })
  queryString = queryString + \`}\`
  if (addSystemFragment) {
    queryString = queryString + \`\${systemFragment}\`
  }
  if (addConnectionFragment) {
    queryString = queryString + \`\${connectionFragment}\`
  }

  return fetch('http://localhost:4001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryString,
    }),
  }).then(async (res) => {
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
`
