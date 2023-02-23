import OrderdItem from "@/components/oderedItem/orderedItem";
import React from "react";
import OrderSucess from "./OrderConfirm/OrderConfirm";
import OrderDetails from "./orderdetails";
import Tshirt from "public/tshirt.png";
import Link from "next/link";
import Button from "@/components/Button";

const items = [
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "25.00",
    totalpcs: "3pcs",
    arriving: "12 june",
    deliveredOn: "13 june",
  },
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "25.00",
    totalpcs: "3pcs",
    arriving: "12 june",
    deliveredOn: "13 june",
  },
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
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

const Page = () => {
  return (
    <section className="px-container md:p-0 pb-24 pt-4 flex flex-col gap-5">
      <OrderSucess />
      <div>
        {items.map((x) => (
          <OrderdItem
            image={x.img}
            title={x.item}
            arriving={x.arriving}
            key="v"
          />
        ))}
      </div>
      <OrderDetails
        orderCode={details.orderCode}
        date={details.date}
        total={details.total}
        payment={details.payment}
      />
      <Button
        as={Link}
        href="/myorders"
        size="large"
        className="w-full"
        variant="primary"
      >
        Order History
      </Button>
    </section>
  );
};

export default Page;
