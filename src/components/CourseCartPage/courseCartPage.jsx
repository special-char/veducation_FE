import React from "react";
import ProductConfirm from "../ProductConfirm/productConfirm";
import Tshirt from "public/tshirt.png";
import CourseCart from "@/components/courseCart/courseCart";

const item = [
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
const data = {
  orderPrice: "75",
  totalAmount: "95",
  title: "Veducation T Shirt - Mens Tshirt Pure Black",
  price: "55$",
};

const CoursesCartPage = () => {
  return (
    <div className=" flex flex-col gap-y-14">
      <div className="flex flex-col ">
        {item.map((x) => (
          <ProductConfirm
            image={x.img}
            title={x.item}
            price={x.price}
            key="Cart"
            isCourse={true}
          />
        ))}
      </div>
      <CourseCart
        title={data.title}
        price={data.price}
        orderPrice={data.orderPrice}
        totalAmount={data.totalAmount}
        className="gap-y-16"
      />
    </div>
  );
};

export default CoursesCartPage;
