import { useState } from 'react'
import './App.css'
import Gold from './components/Gold'
import ArcLight from './components/ArclLight'
import Storm from './components/Storm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Camo Tracker</h1>
    <Gold />
    <ArcLight />
    <Storm />
    </>
  )
}

export default App
