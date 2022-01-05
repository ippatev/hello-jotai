import { useState } from 'react'
import {atom, useAtom} from 'jotai'

import logo from './logo.svg'
import './App.css'

const countAtom = atom(0)

function App() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
