import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataHashRouter, Route } from 'react-router-dom'
import Page from './components/pages/landing-page'
import List from './admin/list'
import { App } from './admin'
import { AdminApp } from './admin/app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataHashRouter>
      <Route path="/*" element={<App />} />
      <Route path="/app" element={<AdminApp />} />
    </DataHashRouter>
  </React.StrictMode>
)
