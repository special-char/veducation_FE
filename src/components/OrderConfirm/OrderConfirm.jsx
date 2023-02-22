import React from 'react'

const OrderSucess = () => {
    const date = {
        date : "24" ,
        month : "Oct",
        year : "2023"
    }
  return (
    <div >
        <div className='border-2 p-5 rounded-md  border-[#F5D9B1] bg-[#FCE9CF]'> 
            <p className='text-[#5C5C5C]'>Thank you! 🎉</p>
            <span className='text-[#455441] font-bold'>Your order has been received</span>
            <p className='text-[#455441] text-base '>Arriving by : <span className='text-[#4CA137] text-base font-bold'>{date.date}th {date.month} {date.year}</span></p>
        </div>
    </div>
  )
}

export default OrderSucess