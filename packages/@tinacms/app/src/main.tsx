import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// This value is substituted by our plugin to use
// the user's actual schema
import { tinaConfig } from '../.tina/schema'
import TinaCMS, { TinaAdmin } from 'tinacms'
import { TinaEditProvider } from 'tinacms/dist/edit-state'

const App = () => {
  // TinaAdmin checks edit state, hence why it's still being wrapped by it
  // we should get ride of that check
  return (
    <>
      {/* Just an example to show that the tailwind config is working */}
      <div
        style={{ zIndex: 10000 }}
        className="relative z-50 h-24 w-full bg-rose-400"
      />
      <TinaEditProvider
        editMode={
          // Stricter tsconfig in this package shows this error
          <TinaCMS {...tinaConfig}>
            <TinaAdmin />
          </TinaCMS>
        }
      >
        <div />
      </TinaEditProvider>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
