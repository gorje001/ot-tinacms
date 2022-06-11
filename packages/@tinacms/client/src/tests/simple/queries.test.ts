import {
  format,
  snapPath,
  proxy,
  assertOptionalString,
  assertString,
  assertObject,
  assertOptionalObject,
  assertSystemInfo,
} from '../helpers'
import { query } from './generated/client'

it('simple query', async () => {
  const result = await query(({ post }) => ({
    post: post({ relativePath: 'ok.md' }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  // it has access to post properties
  assertOptionalString(proxy(result).data.post.title)
  assertString(proxy(result).data.post._collection)
  assertString(proxy(result).data.post._template)

  // it has access to the id on a reference
  assertOptionalObject(proxy(result).data.post.author)
  assertOptionalString(proxy(result).data.post.author?.id)

  // it has access to system properties
  assertSystemInfo(proxy(result).data.post._sys)

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

  // it has access to post properties
  assertOptionalString(proxy(result).data.post.title)

  // it has access to author properties
  const maybeAuthor = proxy(result).data.post.author
  assertOptionalString(maybeAuthor?.name)
  // it has access to author system properties
  if (maybeAuthor) {
    assertSystemInfo(maybeAuthor._sys)
  }
})

it('simple query selected fields', async () => {
  const result = await query(({ post }) => ({
    post: post({ relativePath: 'ok.md', fields: { title: true } }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  // it has access the title property
  assertOptionalString(proxy(result).data.post.title)
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

  const edge = proxy(result).data.posts.edges[0]
  assertOptionalObject(edge)
  if (edge) {
    assertObject(edge.node)
    assertOptionalString(edge.node.title)
    assertSystemInfo(edge.node._sys)
  }
})

it('list query with basic arguments', async () => {
  const result = await query(({ postConnection }) => ({
    posts: postConnection({ first: 2, before: 'some-string' }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())
})

it.skip('list query with a filter', async () => {})

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
