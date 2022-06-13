import {
  format,
  snapPath,
  proxy,
  assertOptionalObject,
  assertMatches,
  SystemInfoType,
} from '../helpers'
import { query } from './generated/client'

type TestPost = {
  title: string
  created?: string
  featured?: boolean
  author?: { id: string }
  categories?: string[]
  _sys: SystemInfoType
  _collection: string
  _template: string
}
type TestAuthor = {
  name?: string
  _sys: SystemInfoType
  _collection: string
  _template: string
}

it('simple query', async () => {
  const result = await query(({ post }) => ({
    post: post({ relativePath: 'ok.md' }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  assertMatches<TestPost>(proxy(result).data.post)

  // @ts-expect-error it does not have access to author properties
  proxy(result).data.post.author.name
  // @ts-expect-error it does not have access to reference system properties
  proxy(result).data.post.author._sys
})

it('simple query with the author', async () => {
  const result = await query(({ post }) => ({
    post: post({ relativePath: 'ok.md', include: { author: true } }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  type Test = Omit<TestPost, 'author'> & { author?: TestAuthor }
  assertMatches<Test>(proxy(result).data.post)
})

it('simple query selected fields', async () => {
  const result = await query(({ post }) => ({
    post: post({ relativePath: 'ok.md', fields: { title: true } }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  assertMatches<{ title: string }>(proxy(result).data.post)
  // @ts-expect-error it does not have access to sysem properties
  proxy(result).data.post._sys
  // @ts-expect-error it does not have access to other properties
  proxy(result).data.post.author
})

it('list query', async () => {
  const result = await query(({ postConnection }) => ({
    posts: postConnection(),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  const posts = proxy(result).data.posts
  assertMatches<{
    pageInfo: {
      hasPreviousPage: boolean
      hasNextPage: boolean
      startCursor: string
      endCursor: string
    }
    edges: { cursor: string; node: TestPost }[]
  }>(posts)
})

it('list query with basic arguments', async () => {
  const result = await query(({ postConnection }) => ({
    posts: postConnection({ first: 2, before: 'some-string' }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())
})

it('list query with a reference', async () => {
  const result = await query(({ postConnection }) => ({
    posts: postConnection({ include: { author: true } }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  const edge = proxy(result).data.posts.edges[0]
  if (edge) {
    assertOptionalObject(edge.node.author)
  }
})

it('list query with a filter', async () => {
  const result = await query(({ postConnection }) => ({
    posts: postConnection({
      filter: {
        title: {
          eq: 'Hello, World!',
        },
      },
    }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  const edge = proxy(result).data.posts.edges[0]
  if (edge) {
    assertOptionalObject(edge.node.author)
  }
})

it('list query with a filter on a nested reference', async () => {
  const result = await query(({ postConnection }) => ({
    posts: postConnection({
      filter: {
        author: {
          author: {
            name: { eq: 'Pedro' },
          },
        },
      },
    }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  const edge = proxy(result).data.posts.edges[0]
  if (edge) {
    assertOptionalObject(edge.node.author)
  }
})
