import OrderdItem from "@/components/oderedItem/orderedItem";
import React from "react";
import OrderSucess from "./OrderConfirm/OrderConfirm";
import OrderDetails from "./Orderdetails";
import Tshirt from "public/tshirt.png";
import Link from "next/link";
import Button from "@/components/Button";
import PurchasedItems from "./PurchasedList";
import { getUser } from "@/lib/getUser";
import { headers } from "next/headers";
import axios from "axios";

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

export async function getSessionUser(cookie) {
  try {
    const response = await axios.get(`http://localhost:3000/api/auth/session`, {
      headers: {
        cookie,
      },
    });

    return Object.keys(response.data).length > 0 ? response.data : null;
  } catch (error) {
    console.log(error);
  }
}

const Page = async (props) => {
  console.log({ orderConfirmed: props });
  const session = await getSessionUser(headers().get("cookie") ?? "");
  const users = await getUser();
  const user = users?.find((item) => item?.email === session?.user?.email);
  return (
    <section className="px-container md:p-0 pt-4 flex flex-col gap-5">
      <OrderSucess />
      <div>
        <PurchasedItems {...props} user={user} />
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
