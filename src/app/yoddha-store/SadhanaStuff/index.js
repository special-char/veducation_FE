import React from "react";
import Tshirt from "public/tshirt.png";
import Productlist from "@/components/ProductItem";
import ProductTitle from "@/components/ProductTitle";
const data = [
  {
    img: Tshirt,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    content: "Cotton T-shirt",
    rate: 3,
    count: 20,
  },
  {
    img: Tshirt,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    content: "Cotton T-shirt",
    rate: 3,
    count: 20,
  },
  {
    img: Tshirt,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    content: "Cotton T-shirt",
    rate: 3,
    count: 20,
  },
  {
    img: Tshirt,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    content: "Cotton T-shirt",
    rate: 3,
    count: 20,
  },
];
const SadhanaStuff = () => {
  return (
    <section>
      <ProductTitle title={"Sadhna Stuff"} link={"view all"} />
      <Productlist productList={data} />
    </section>
  );
};

export default SadhanaStuff;
