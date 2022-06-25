import { createClientInner } from '../..'
import { TinaSchema, addNamespaceToSchema } from '@tinacms/schema-tools'
import '../helpers'

/**
 *
 * NOTE:
 * This test actually creates the client module
 * and puts it in `client.ts` for other tests
 *
 * Ideally this would just be a beforeAll() type of
 * thing but just watchers get into an endless loop
 * when you generate a file in the tests directory so
 * not sure of how to get out of it
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
            description: 'The title of your post, this field is required.',
            type: 'string',
            required: true,
          },
          {
            name: 'created',
            description: 'When was this post created',
            type: 'datetime',
          },
          {
            name: 'featured',
            description: 'This post should be featured in promotional material',
            type: 'boolean',
          },
          {
            name: 'categories',
            description: 'A list of categories for this post',
            type: 'string',
            list: true,
          },
          {
            name: 'author',
            description: `## Heads up!

This is actually a _reference_!`,
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
            required: true,
          },
          {
            name: 'bio',
            type: 'object',
            required: true,
            fields: [
              {
                required: true,
                type: 'string',
                name: 'country',
              },
            ],
          },
        ],
      },
    ],
  })
  const client = await createClientInner(
    { tinaSchema },
    `const schema = ${JSON.stringify(addNamespaceToSchema(tinaSchema.config))}`
  )
  expect(client).toMatchFile('./src/tests/simple/generated/client.ts')
})
