import Productlist from "@/components/ProductList";
import ProductTitle from "@/components/ProductTitle";
import { getCategoryData } from "@/lib/getHomeProductData";
import React from "react";
import GadaMudgals from "./GadaMudgals";
import SadhanaStuff from "./SadhanaStuff";
import TshirtStuff from "./Tshirt";
import Tshirt from "./Tshirt";

const Page = async () => {
  const category = await getCategoryData();
  return (
    <div className="h-full  lg:px-0 xs:px-container">
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
