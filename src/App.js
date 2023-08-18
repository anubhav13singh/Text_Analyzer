import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'


function App() {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path= '/' element={ <Home/>}/>
      <Route path= '/About' element={ <About />}/>
    </Routes>
    
    </>
  )
}

export default App