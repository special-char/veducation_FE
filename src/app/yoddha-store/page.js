import Productlist from "@/components/ProductList";
import { getCategoryData } from "@/lib/getHomeProductData";
import React from "react";

const Page = async () => {
  const category = await getCategoryData();
  return (
    <div className="h-full  md:px-0 xs:px-container">
      {category?.data?.map((category) => {
        return (
          <>
            <Productlist id={category?.id} />
          </>
        );
      })}
    </div>
  );
};

export default Page;
