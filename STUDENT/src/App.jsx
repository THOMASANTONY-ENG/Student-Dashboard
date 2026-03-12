
import React from 'react'
import Navbar from "./components/Navbar"

import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Student from './pages/student'
import About from './pages/about'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App