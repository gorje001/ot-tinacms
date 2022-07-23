import { createServer } from 'vite'
import { ViteNodeServer } from 'vite-node/server'
import { ViteNodeRunner } from 'vite-node/client'

export const run = async (path) => {
  console.log(path)
  import(path).then((value) => {
    console.log(value)
  })
}
