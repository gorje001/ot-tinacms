import MyConfig from './config'
import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React + Tina</h1>
      {/* {JSON.stringify(myConfig, null, 2)} */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <MyConfig />
        </button>
      </div>
    </div>
  )
}

export default App
