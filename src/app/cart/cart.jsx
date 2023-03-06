import React, { use } from "react";
import ProductConfirm from "../../components/ProductConfirm/productConfirm";
import Tshirt from "public/tshirt.png";
import CourseCart from "@/components/courseCart/courseCart";
import { getProductData } from "@/lib/getHomeProductData";
import { getUser } from "@/lib/getUser";
import { getBillingDetails } from "@/lib/getBillingDetails";
import CartItemList from "./CartItemList";

const data = {
  orderPrice: "75",
  totalAmount: "95",
  title: "Veducation T Shirt - Mens Tshirt Pure Black",
  price: "55$",
};

const CartPage = async () => {
  const user = await getUser();
  const billingData = await getBillingDetails();

  const items = [];
  return (
    <div className=" flex flex-col gap-2 h-full justify-between">
      <div className="flex flex-col ">
        <CartItemList />
      </div>
      <CourseCart
        users={user}
        data={billingData}
        title={data.title}
        price={data.price}
        orderPrice={data.orderPrice}
        totalAmount={data.totalAmount}
        className="gap-y-16"
      />
    </div>
  );
};

export default CartPage;
