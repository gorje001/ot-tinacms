import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataHashRouter, Route } from 'react-router-dom'
import Page from './components/pages/landing-page'
import List from './admin/list'
import { App } from './admin'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="tina-tailwind">
      <DataHashRouter>
        <Route path="/" element={<App />} />
        <Route path="admin" element={<App />} />
      </DataHashRouter>
    </div>
  </React.StrictMode>
)
