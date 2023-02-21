import React from "react";
import OrderdItem from "../oderedItem/orderedItem";
import Tshirt from "public/tshirt.png";
import styles from "./YourOrderPage.module.css";
import ProductConfirm from "../ProductConfirm/productConfirm";

const items = [
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "25.00",
    totalpcs: "3pcs",
    // arriving: "12 june",
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

const YourOrderPage = () => {
  return (
    <div className={styles.main}>
      <h5 className="font-bold text-sm pb-5">your Order</h5>
      {items.map((x) => (
        <OrderdItem
          image={x.img}
          title={x.item}
          arriving={x.arriving}
          deliveredOn={x.deliveredOn}
          key="v"
        />
      ))}
    </div>
  );
};

export default YourOrderPage;
