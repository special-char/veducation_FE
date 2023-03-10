// "use client";
import OrderdItem from "@/components/oderedItem/orderedItem";
import { getPuchasedItems } from "@/lib/getPurchasedItems";
import React from "react";

const PurchasedItems = async ({ user, myorder, ...props }) => {
  const currentCartItems = props?.searchParams?.cartItems?.split(",");
  const purchaseData = await getPuchasedItems(user?.id);
  console.log({
    purchaseData: purchaseData?.data?.filter((item) => {
      return currentCartItems?.map((ci) => {
        return item?.id == ci;
      });
    }),
  });

  const productList = myorder
    ? purchaseData?.data?.map(
        (item) => item?.attributes?.product?.data?.attributes
      )
    : purchaseData?.data
        ?.filter((item) => {
          for (let i = 0; i < currentCartItems?.length; i++) {
            const ci = currentCartItems[i];
            if (item?.id == ci) return item;
          }
        })
        .map((x) => x?.attributes?.product?.data?.attributes);
  return (
    <div>
      {productList?.map((x) => (
        <OrderdItem
          image={x?.posterImageUrl}
          title={x.title}
          price={x?.price}
          quantity={x?.items}
          key={x?.id}
        />
      ))}
    </div>
  );
};

export default PurchasedItems;
