import { createClientInner } from '..'
import { TinaSchema, addNamespaceToSchema } from '@tinacms/schema-tools'
import { toMatchFile } from 'jest-file-snapshot'
import 'isomorphic-fetch'

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
          {
            name: 'author',
            type: 'reference',
            collections: ['author'],
          },
        ],
      },
      {
        name: 'author',
        path: '',
        fields: [
          {
            name: 'name',
            type: 'string',
          },
        ],
      },
    ],
  })
  const meh = await createClientInner(
    { tinaSchema },
    `const schema = ${JSON.stringify(addNamespaceToSchema(tinaSchema.config))}`
  )
  expect(meh).toMatchFile('./src/tests/snaps/1.ts')
})
