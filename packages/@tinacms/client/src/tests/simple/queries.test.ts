import { format, snapPath, proxy } from '../helpers'
import { query } from './client'

it('simple query', async () => {
  const result = await query(({ post }) => ({
    post: post({ relativePath: 'ok.md' }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  // it has access to post properties
  proxy(result).data.post
  // it has access to system properties
  proxy(result).data.post._sys.filename
  // @ts-expect-error it does not have access to author properties
  proxy(result).data.post.author.name
})

it('simple query with the author', async () => {
  const result = await query(({ post }) => ({
    post: post({ relativePath: 'ok.md', include: { author: true } }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  // it has access to post properties
  proxy(result).data.post
  // it has access to author properties
  proxy(result).data.post.author.name
  // it has access to author system properties
  proxy(result).data.post.author._sys.extension
})

it('simple query selected fields', async () => {
  const result = await query(({ post }) => ({
    post: post({ relativePath: 'ok.md', fields: { title: true } }),
  }))
  expect(format(result.query)).toMatchFile(snapPath())

  // it has access the title property
  proxy(result).data.post.title
  // @ts-expect-error it does not have access to other properties
  proxy(result).data.post.author
})
