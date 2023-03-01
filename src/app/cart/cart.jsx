import React, { use } from "react";
import ProductConfirm from "../../components/ProductConfirm/productConfirm";
import Tshirt from "public/tshirt.png";
import CourseCart from "@/components/courseCart/courseCart";
import { getProductData } from "@/lib/getHomeProductData";
import { getUser } from "@/lib/getUser";
import { getBillingDetails } from "@/lib/getBillingDetails";

// const item = [
//   // {
//   //   img: Tshirt,
//   //   item: "Veducation T Shirt - Mens Tshirt Pure Black",
//   //   price: "25.00",
//   //   totalpcs: "3pcs",
//   //   arriving: "12 june",
//   //   deliveredOn: "13 june",
//   // },
//   // {
//   //   img: Tshirt,
//   //   item: "Veducation T Shirt - Mens Tshirt Pure Black",
//   //   price: "25.00",
//   //   totalpcs: "3pcs",
//   //   arriving: "12 june",
//   //   deliveredOn: "13 june",
//   // },
//   // {
//   //   img: Tshirt,
//   //   item: "Veducation T Shirt - Mens Tshirt Pure Black",
//   //   price: "25.00",
//   //   totalpcs: "3pcs",
//   //   arriving: "12 june",
//   //   deliveredOn: "13 june",
//   // },
// ];
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
    <div className=" flex flex-col gap-2 h-screen">
      <div className="flex flex-col ">
        {items.map(({ attributes: x }) => (
          <ProductConfirm
            image={x.posterImageUrl}
            title={x.name}
            price={x.price}
            key="Cart"
          />
        ))}
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
