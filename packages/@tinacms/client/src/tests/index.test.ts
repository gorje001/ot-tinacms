import { createClientInner } from '..'
import { TinaSchema } from '@tinacms/schema-tools'
import { toMatchFile } from 'jest-file-snapshot'
import 'isomorphic-fetch'
import prettier from 'prettier'

expect.extend({ toMatchFile })

it('passes', async () => {
  const tinaSchema = new TinaSchema({
    collections: [
      {
        name: 'post',
        path: '',
        fields: [
          {
            name: 'title',
            type: 'string',
          },
        ],
      },
    ],
  })
  const meh = await createClientInner(
    { tinaSchema },
    `const schema = ${JSON.stringify(tinaSchema.config)}`
  )
  expect(meh).toMatchFile('./src/tests/snaps/1.ts')
})

import { query } from './snaps/1'

it('generates sensible queries', async () => {
  const builder = await query((cb) => ({
    post: cb.post({ relativePath: 'ok.md' }),
  }))

  expect(prettier.format(builder.query, { parser: 'graphql' }))
    .toMatchInlineSnapshot(`
    "query {
      post: post(relativePath: \\"ok.md\\") {
        title
      }
    }
    "
  `)
})

it('it creates the expected types', async () => {
  const builder = await query((cb) => ({
    post: cb.post({ relativePath: 'ok.md' }),
  }))
  // only use for type check
  if (false) {
    builder.data.post.title
    // @ts-expect-error
    builder.data.post.otherField
  }
  expect(true).toEqual(true)
})
