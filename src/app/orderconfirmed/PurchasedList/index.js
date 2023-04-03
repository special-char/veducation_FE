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
  console.log("PurchasedItems:", purchaseData);
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
  return (
    <div className="pb-40">
      {productList.length > 0 ? (
        productList?.map((x) => (
          <OrderdItem
            image={x?.posterImageUrl}
            price={x?.price}
            quantity={x?.items}
            title={x?.title}
            price={x?.price}
            quantity={x?.items}
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
