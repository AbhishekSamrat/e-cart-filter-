import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { item } from '../Cart'

import { BsCartFill } from "react-icons/bs";

const Navbar = ({setdat,cart}) => {
  const location = useLocation()
 const navigate = useNavigate()
  const [searchitem, setsearchitm] = useState("")

  const filterbycatgry = (category)=>{
    const elmnt = item.filter((prdct)=>prdct.category === category)
    setdat(elmnt)
    
  }
const filterbyprice = (price)=>{
const elmnt = item.filter((prce)=>prce.price >= price)
setdat(elmnt)

}

const handlesubmit = (e)=>{
   e.preventDefault()
   navigate(`/search/${searchitem}`)
   setsearchitm("")
}
  return (
 <>
 <header className='sticky-top'>
 <div className='nav-bar'>
 <Link to={"/"} className='brand'>Shop-Cart</Link>

 <form className='search-bar' onSubmit={handlesubmit}>
 <input type='text' value={searchitem} onChange={(e)=>setsearchitm(e.target.value)} placeholder='search your products..'></input>
 </form>

 <Link to={"/cart"} className='cart'>
 <button type="button" class="btn btn-primary position-relative">
 <BsCartFill style={{fontSize:"1.5rem"}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
 </Link>
 </div>
{
  location.pathname == "/" &&
  (
    <div className='navbar-wrapper'>
    <div className='items'>Filter by {"-->"}</div>
    <div className='items' onClick={()=>setdat(item)}>No Filter</div>
    <div className='items' onClick={()=>filterbycatgry("mobile")}>Mobiles</div>
    <div className='items' onClick={()=>filterbycatgry("laptop")}>Laptops</div>
    <div className='items' onClick={()=>filterbycatgry("tablets")}>Tablets</div>
    <div className='items' onClick={()=>filterbyprice(29999)}>{">="}29999</div>
    <div className='items' onClick={()=>filterbyprice(49999)}>{">="}49999</div>
    <div className='items' onClick={()=>filterbyprice(69999)}>{">="}69999</div>
    <div className='items' onClick={()=>filterbyprice(79999)}>{">="}79999</div>
    </div>
  )
}


 </header>
 
 </>
  )
}

export default Navbar