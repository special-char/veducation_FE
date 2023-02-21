import React from 'react'
import ProductConfirm from '../ProductConfirm/productConfirm'
import Tshirt from "public/tshirt.png";


const item=[{
  img:Tshirt,
  item:"Veducation T Shirt - Mens Tshirt Pure Black",
  price:"25.00",
  totalpcs:"3pcs",
  arriving:"12 june",
  deliveredOn:"13 june"
},
{
    img:Tshirt,
    item:"Veducation T Shirt - Mens Tshirt Pure Black",
    price:"25.00",
    totalpcs:"3pcs",
    arriving:"12 june",
    deliveredOn:"13 june"
  },
  {
    img:Tshirt,
    item:"Veducation T Shirt - Mens Tshirt Pure Black",
    price:"25.00",
    totalpcs:"3pcs",
    arriving:"12 june",
    deliveredOn:"13 june"
  },]

const CartPage = () => {
  return (
    <div>
        {item.map((x)=>(
        <ProductConfirm image={x.img} title={x.item} price={x.price}  key="Cart"/>
        ))}
        
    </div>
  )
}

export default CartPage