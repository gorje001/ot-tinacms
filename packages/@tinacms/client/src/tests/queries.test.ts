import { toMatchFile } from 'jest-file-snapshot'
import 'isomorphic-fetch'
import prettier from 'prettier'
import { query } from './snaps/1'

expect.extend({ toMatchFile })

const format = (query: string) => {
  return prettier.format(query, { parser: 'graphql' })
}

it('generates appropriate queries', async () => {
  const builder = await query((cb) => ({
    post: cb.post({ relativePath: 'ok.md' }),
  }))
  expect(format(builder.query)).toMatchInlineSnapshot(`
"query {
  post: post(relativePath: \\"ok.md\\") {
    ...SystemInfo
    title
    author {
      ... on Document {
        id
      }
    }
  }
}
fragment SystemInfo on Document {
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
}
"
`)
})

it('generates sensible queries with references', async () => {
  const builder = await query((cb) => ({
    post: cb.post({
      relativePath: 'ok.md',
      include: {
        author: true,
      },
    }),
  }))
  expect(format(builder.query)).toMatchInlineSnapshot(`
"query {
  post: post(relativePath: \\"ok.md\\") {
    ...SystemInfo
    title
    author {
      ...SystemInfo
      ... on Author {
        name
      }
    }
  }
}
fragment SystemInfo on Document {
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
}
"
`)

  // Check types
  if (false) {
    builder.data.post.title
    builder.data.post.author.name
  }
})
