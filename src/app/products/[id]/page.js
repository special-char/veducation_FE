import Productlist, { ProductItem } from "@/components/ProductList";
import ProductTitle from "@/components/ProductTitle";
import { getCategoryData } from "@/lib/getHomeProductData";
import Link from "next/link";
import React from "react";

const Page = async (props) => {
  const productData = await getCategoryData(props.params.id);
  const { name, products } = productData?.data?.attributes;
  // if (products?.data?.lenght === 0) {
  //   return (
  //     <div className="h-[79vh] pb-0 w-full flex items-center justify-center">
  //       <span className="bg-primary text-white font-semibold text-sm text-center px-10 py-2 rounded-md">
  //         No data available
  //       </span>
  //     </div>
  //   );
  // }
  return (
    <div className="flex  flex-col h-full w-full bg-background xs:px-container lg:px-0">
      <ProductTitle title={name} link="" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-between">
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
