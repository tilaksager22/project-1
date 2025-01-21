import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/home'
import About from './component/About'
import Contact from './component/Contact'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
