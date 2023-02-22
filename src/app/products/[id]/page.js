import Productlist, { ProductItem } from "@/components/ProductList";
import ProductTitle from "@/components/ProductTitle";
import { getCategoryData } from "@/lib/getHomeProductData";
import Link from "next/link";
import React from "react";

const Page = async (props) => {
  const productData = await getCategoryData(props.params.id);
  const { name, products } = productData?.data?.attributes;
  return (
    <div className="flex  flex-col h-screen bg-background xs:px-container lg:px-0">
      <ProductTitle title={name} link="" />
      <div className="flex flex-wrap flex-row xs:gap-3 ">
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
