// "use client";
import OrderdItem from "@/components/oderedItem/orderedItem";
import { getPuchasedItems } from "@/lib/getPurchasedItems";
import React from "react";

const PurchasedItems = async ({
  user,
  myorder,
  purchaseData,
  currentCartIds,
  ...props
}) => {
  const productList = myorder
    ? purchaseData?.data?.map(
        (item) => item?.attributes?.product?.data?.attributes
      )
    : purchaseData?.data
        ?.filter((item) => {
          for (let i = 0; i < currentCartIds?.length; i++) {
            const ci = currentCartIds[i];
            if (item?.id == ci) return item;
          }
        })
        .map((x) => x?.attributes?.product?.data?.attributes);
  console.log({ productList });
  return (
    <div className="">
      {productList?.length ? (
        productList?.map((x) => (
          <OrderdItem
            image={x?.posterImageUrl?.data?.attributes?.url}
            price={x?.price}
            quantity={x?.items}
            title={x?.title}
            key={x?.id}
            
          />
        ))
      ) : (
        <div className="h-[79vh] w-full flex items-center justify-center">
          <span className="bg-primary text-white font-semibold text-sm text-center px-10 py-2 rounded-md">
            You should buy Something
          </span>
        </div>
      )}
    </div>
  );
};

export default PurchasedItems;
