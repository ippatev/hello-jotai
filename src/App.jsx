import React from 'react'
import { useState } from 'react'
import {atom, useAtom, Provider} from 'jotai'
import {atomWithStorage} from 'jotai/utils'

import logo from './logo.svg'
import './App.css'

import UserInfo from './components/UserInfo'

const countAtom = atom(0)
const darkModeAtom = atomWithStorage('darkMode', false)

function App() {
  const [count, setCount] = useAtom(countAtom)
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

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
      <main className={darkMode ? 'dark' : null}>
        <div>
          <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
          <button onClick={toggleDarkMode}>toggle theme</button>
        </div>
        <Provider>
          <React.Suspense fallback={<span>loading...</span>}>
            <div>
              <UserInfo/>
            </div>
          </React.Suspense>
        </Provider>
      </main>
    </div>
  )
}

export default App
