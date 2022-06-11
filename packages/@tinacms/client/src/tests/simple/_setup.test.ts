import { createClientInner } from '../..'
import { TinaSchema, addNamespaceToSchema } from '@tinacms/schema-tools'
import '../helpers'

/**
 *
 * NOTE:
 * This test actually creates the client module
 * and puts it in `client.ts` for other tests
 */
it('Creates the client', async () => {
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
  const client = await createClientInner(
    { tinaSchema },
    `const schema = ${JSON.stringify(addNamespaceToSchema(tinaSchema.config))}`
  )
  expect(client).toMatchFile('./src/tests/simple/client.ts')
})
