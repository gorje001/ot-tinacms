import { toMatchFile } from 'jest-file-snapshot'
import 'isomorphic-fetch'
import prettier from 'prettier'

expect.extend({ toMatchFile })

export const format = (query: string) => {
  return prettier.format(query, { parser: 'graphql' })
}

export const snapPath = () =>
  `./src/tests/simple/queries/${expect.getState().currentTestName}.gql`

/**
 * This allows us to typecheck the result without actually
 * inspecting its content. Since the client lies about what it
 * returns (since the return value actually comes from a fetch result)
 * we still want to call result.data.post.title to ensure the types
 * actually work, so this effectively just mocks those calls
 */
export const proxy = <T>(obj: T): T => {
  // @ts-ignore
  return new Proxy(obj, {
    get: () => {
      return proxy(obj)
    },
  })
}

export type SystemInfoType = {
  filename: string
  basename: string
  breadcrumbs: string[]
  path: string
  relativePath: string
  extension: string
  template: string
  collection: { name: string; format: string }
  __typename: string
}

export const assertString = (val: string) => proxy(val)
export const assertOptionalString = (val?: string) => proxy(val)
export const assertOptionalStringArray = (val?: string[]) => proxy(val)
export const assertOptionalBoolean = (val?: boolean) => proxy(val)
export const assertObject = (val: object) => proxy(val)
export const assertMatches = <T>(val: T) => proxy(val)
export const assertOptionalObject = (val?: object) => proxy(val)
export const assertSystemInfo = (val: SystemInfoType) => proxy(val)
