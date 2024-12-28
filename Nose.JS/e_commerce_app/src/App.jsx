import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './component/menu/Contact'
import Footer from './Footer'
import Home from './component/menu/Home'
import Login from './component/menu/Login'
import Register from './component/menu/Register'
import Product from './component/menu/Product'
import About from './component/menu/About'

function App() {
  return<div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/login' element={<Login/>}></Route> 
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    <Footer/>
    </div>
}

export default App