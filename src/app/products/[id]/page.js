import Productlist, { ProductItem } from "@/components/ProductList";
import ProductTitle from "@/components/ProductTitle";
import { getCategoryData } from "@/lib/getHomeProductData";
import Link from "next/link";
import React from "react";

const Page = async (props) => {
  const productData = await getCategoryData(props.params.id);
  const { name, products } = productData?.data?.attributes;
  return (
    <div className="flex  flex-col h-full w-full bg-background xs:px-container lg:px-0 pb-24">
      <ProductTitle title={name} link="" />
      <div className="grid grid-cols-2 md:grid-cols-3 md:mx-auto gap-3 ">
        {/* <div className="grid grid-cols-2 xs:gap-3 "> */}
        {products?.data?.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductItem {...product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
