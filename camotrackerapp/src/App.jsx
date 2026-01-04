import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import CamoTracker from './components/CamoTracker'
import Home from './components/HomePage'
import PathOfExile from './components/PathOfExile'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = '/' element={<Home />} />
      <Route path = '/camotracker' element={<CamoTracker />} />
      <Route path = '/pathofexile' element={<PathOfExile />} />
    </Routes>
    </>
  )
}

export default App
