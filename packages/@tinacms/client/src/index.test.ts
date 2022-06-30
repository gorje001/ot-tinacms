import * as c from '.'
import { TinaFieldEnriched } from '@tinacms/schema-tools'

test('builders for string', () => {
  const field: TinaFieldEnriched = {
    type: 'string',
    name: 'title',
    namespace: ['page', 'title'],
  }
  expect(c.buildFieldFilterStatement(field)).toMatchInlineSnapshot(
    `"title?: {eq?: string, startsWith?: string}"`
  )
  expect(c.buildFieldTypeStatement(field)).toMatchInlineSnapshot(
    `"title?: true"`
  )
})
