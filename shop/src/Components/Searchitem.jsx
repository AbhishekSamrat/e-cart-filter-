import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { item } from '../Cart'
import Products from '../Products'

const Searchitem = ({cart,setcart}) => {
  const {term} = useParams()
  const [filteritm, setfilteritm] = useState([])

  useEffect(()=>{
    const filterprdct = ()=>{
        const data = item.filter((itm)=>itm.title.toLowerCase().includes(term.toLowerCase()))
        setfilteritm(data)
    }
filterprdct()
  },[term])
  
  return (
    <Products item={filteritm} cart={cart} setcart={setcart}></Products>
  )
}

export default Searchitem