import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Products from './Products'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Productdetail from './Components/Productdetail'
import  Searchitem  from './Components/Searchitem'
import Cart  from './Components/Cart'
import { item } from './Cart'

const App = () => {
  const [dat, setdat] = useState([...item])
  const [cartbag, setcartbag] = useState([])
  return (
   <>
   <BrowserRouter>
   <Navbar setdat = {setdat} cart ={cartbag}></Navbar>
   <Routes>
   <Route path='/' element={<Products item = {dat} cart = {cartbag}  setcart = {setcartbag}></Products>}></Route>
   <Route path='/product/:id' element={<Productdetail  cart = {cartbag}  setcart = {setcartbag}></Productdetail>}></Route>
   <Route path='/search/:term' element={<Searchitem  cart = {cartbag}  setcart = {setcartbag}></Searchitem>}></Route>
   <Route path='/cart' element={<Cart cart={cartbag} setcart = {setcartbag}></Cart>}></Route>

   
   </Routes>
  
   </BrowserRouter>
  
   </>
  )
}

export default App