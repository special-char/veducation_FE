import OrderdItem from '@/components/oderedItem/orderedItem'
import OrderSucess from '@/components/OrderConfirm/OrderConfirm'
import OrderDetails from '@/components/order_details'
import Tshirt from "public/blacktshirt.png"

import React from 'react'


  

const OrderConfirm = () => {
    const items = [{
        img:Tshirt,
        item:"Veducation T Shirt - Mens T-shirt Pure Black",
        price:"25.00",
        totalpcs:"3pcs",
        arriving:"12 june",
        deliveredOn:"13 june"
      },{
        img:Tshirt,
        item:"Veducation T Shirt - Mens T-shirt Pure Black",
        price:"25.00",
        totalpcs:"3pcs",
        arriving:"12 june",
        deliveredOn:"13 june"
      }];
      const details = {
        orderCode: "#85764564674646",
        date: "February 19, 2021",
        total: "$1,345.00",
        payment: "Cash on Delivery",
      };
    
  return (
    <div className='flex flex-col gap-9'>
      <OrderSucess />
      {items.map((x)=>(
      <OrderdItem image={x.img} title={x.item}  price={x.price} key="df"  />
      ))}
      <OrderDetails  orderCode={details.orderCode} date={details.date} total={details.total} payment={details.payment} />
    </div>
  )
}

export default OrderConfirm