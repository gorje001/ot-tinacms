// Seems like this is no longer necessary
// import react from '@vitejs/plugin-react'
import { build, defineConfig } from 'vite'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export function pluginResolvePathToTina() {
  const moduleName = './config'

  return {
    name: 'my-plugin', // required, will show up in warnings and errors
    enforce: 'pre',
    resolveId(id) {
      if (id === moduleName) {
        const pathToSchema = join(process.cwd(), '.tina', 'config.tsx')
        return pathToSchema
      }
    },
  }
}

const config = defineConfig({
  root: __dirname,
  plugins: [pluginResolvePathToTina()],
  define: {
    'process.env': {},
  },
  build: {
    outDir: join(process.cwd(), 'public'),
    emptyOutDir: false,
  },
})

build(config)
