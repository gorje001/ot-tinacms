// @ts-nocheck
import { Routes, Route } from 'react-router-dom'
import Page from './components/pages/landing-page'
import { App } from './admin'

const Meh = () => {
  return <div>hi</div>
}

function TinaApp() {
  return (
    <>
      <Route path="/*" element={<Page />} />
      <Route path="admin" element={<App />} />
    </>
  )
}

export default TinaApp
