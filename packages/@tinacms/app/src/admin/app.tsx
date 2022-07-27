import React, { Suspense, useEffect, useRef, useState } from 'react'
import { AdminLayout } from './adminLayout'
import { Nav } from './nav'

export const AdminApp = () => {
  const ref = useRef(null)
  const [status, setStatus] = React.useState<'full' | 'hidden'>('hidden')
  const [location, setLocation] = useState('/')
  useEffect(() => {
    setInterval(() => {
      if (ref.current) {
        setLocation(ref.current.contentWindow.location.pathname)
      }
    }, 500)
  }, [ref.current])

  return (
    <AdminLayout status={status}>
      <div>Hiagain</div>
    </AdminLayout>
  )
}
