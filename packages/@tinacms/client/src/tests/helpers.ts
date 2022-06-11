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
    get: (subject, name) => {
      return proxy(obj)
    },
  })
}
