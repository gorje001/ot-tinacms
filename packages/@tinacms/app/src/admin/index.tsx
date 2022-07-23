import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Layout } from './layout'
import { Nav } from './nav'

export const App = () => {
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
    <div>
      <Layout status={status}>
        <Nav
          status={status}
          setStatus={setStatus}
          value={location}
          setValue={setLocation}
        />
        <iframe
          onLoad={(e) => console.log('loaded', e)}
          ref={ref}
          className="h-full w-full"
          src={'/'}
        />
      </Layout>
    </div>
  )
}
