import React from 'react'

import {Link} from 'react-router-dom'



const Products = ({item,cart,setcart}) => {

const adtocart = (id,price,title,description,imgsrc) =>{
const obj = {id,price,title,description,imgsrc}
setcart([...cart,obj])



}


  return (
<>

<div className='container'>
<div className='row'>
  {
    item.map((el)=>{
return(
    <>


<div key={el.id} className='col-lg-3 col-md-6'>

    <div className="card" >
    <Link to={`/product/${el.id}`} style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
  <img  src={el.imgsrc} class="card-img-top" alt="..."/>
  </Link>
  <div className="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p className="card-text">{el.description}</p>
    <button className='btn btn-primary mx-4'>{el.price}₹</button>
  <button className='btn btn-warning' onClick={()=>adtocart(el.id,el.price,el.title,el.description,el.imgsrc)}>Add to cart</button>
  </div>
  
</div>
</div>
    </>

)

    })
  }
</div>
</div>
</>
  )
}

export default Products