import OrderdItem from '@/components/oderedItem/orderedItem'
import OrderSucess from '@/components/OrderConfirm/OrderConfirm'
import OrderDetails from '@/components/order_details'
import Tshirt from "public/tshirt.png"

import React from 'react'


  

const OrderConfirm = () => {
    const items = {
        img:Tshirt,
        item:"Veducation T Shirt - Mens T-shirt Pure Black",
        price:"25.00",
        totalpcs:"3pcs",
        arriving:"12 june",
        deliveredOn:"13 june"
      };
      const details = {
        orderCode: "#85764564674646",
        date: "February 19, 2021",
        total: "$1,345.00",
        payment: "Cash on Delivery",
      };
    
  return (
    <div>
      <OrderSucess />
      <OrderdItem  image={items.img} title={items.item}  arriving={items.arriving}  />
        <OrderDetails  orderCode={details.orderCode} date={details.date} total={details.total} payment={details.payment} />
    </div>
  )
}

export default OrderConfirm