import OrderdItem from "@/components/oderedItem/orderedItem";
import OrderSucess from "@/app/orderconfirmed/OrderConfirm/OrderConfirm";
import OrderDetails from "@/app/orderconfirmed/orderdetails";
import Tshirt from "public/blacktshirt.png";

import React from "react";
import Button from "@/components/Button";

const OrderConfirm = () => {
  const items = [
    {
      img: Tshirt,
      item: "Veducation T Shirt - Mens T-shirt Pure Black",
      price: "25.00",
      totalpcs: "3pcs",
      arriving: "12 june",
      deliveredOn: "13 june",
    },
    {
      img: Tshirt,
      item: "Veducation T Shirt - Mens T-shirt Pure Black",
      price: "25.00",
      totalpcs: "3pcs",
      arriving: "12 june",
      deliveredOn: "13 june",
    },
  ];
  const details = {
    orderCode: "#85764564674646",
    date: "February 19, 2021",
    total: "$1,345.00",
    payment: "Cash on Delivery",
  };

  return (
    <div className="flex flex-col gap-9 pb-24">
      <OrderSucess />
      {items.map((x) => (
        <OrderdItem image={x.img} title={x.item} price={x.price} key="df" />
      ))}
      <OrderDetails
        orderCode={details.orderCode}
        date={details.date}
        total={details.total}
        payment={details.payment}
      />

      <div className="pt-6">
        <Button
          variant="primary"
          size="large"
          as={Link}
          href="/myorders"
          className={"text-base w-full p-2"}
        >
          Order History
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirm;
