import React from "react";
import OrderdItem from "../../components/oderedItem/orderedItem";
import Tshirt from "public/tshirt.png";
import styles from "./yourOrderPage.module.css";
import ProductConfirm from "../../components/ProductConfirm/productConfirm";
import { getSessionUser } from "../orderconfirmed/page";
import { headers } from "next/headers";
import { getUser } from "@/lib/getUser";
import PurchasedItems from "../orderconfirmed/PurchasedList";

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

const YourOrderPage = async () => {
  const session = await getSessionUser(headers().get("cookie") ?? "");
  const users = await getUser();
  const user = users?.find((item) => item?.email === session?.user?.email);
  console.log({ session });
  return (
    <div className="h-auto">
      <h5 className="font-bold text-sm">your Order</h5>
      <PurchasedItems user={user} myorder />
    </div>
  );
};

export default YourOrderPage;
