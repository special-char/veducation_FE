import Productlist from "@/components/ProductItem";
import ProductTitle from "@/components/ProductTitle";
import Gada from "public/gada.png";
import React from "react";

const data = [
  {
    img: Gada,
    title: "Wooden Teakwood Mudgals",
    weight: "3kg",
    rate: 3,
    count: 20,
  },
  {
    img: Gada,
    title: "Wooden Teakwood Mudgals",
    weight: "3kg",
    rate: 3,
    count: 20,
  },
  {
    img: Gada,
    title: "Wooden Teakwood Mudgals",

    weight: "3kg",
    rate: 3,
    count: 20,
  },
  {
    img: Gada,
    title: "Wooden Teakwood Mudgals",
    weight: "3kg",
    rate: 3,
    count: 20,
  },
];

const GadaMudgals = () => {
  return (
    <section>
      <ProductTitle title="Gada - Mudgals" link="view all" />
      <Productlist productList={data} />
    </section>
  );
};

export default GadaMudgals;
