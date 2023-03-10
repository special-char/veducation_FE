// "use client";
import OrderdItem from "@/components/oderedItem/orderedItem";
import { getPuchasedItems } from "@/lib/getPurchasedItems";
import React from "react";

const PurchasedItems = async ({ user }) => {
  console.log({ user });
  const purchaseData = await getPuchasedItems(user?.id);
  console.log({
    purchaseData: purchaseData?.data
      ?.map((item) => item?.attributes?.product)
      .map((x) => x.data?.attributes),
  });

  const productList = purchaseData?.data
    ?.map((item) => item?.attributes?.product)
    .map((x) => x.data?.attributes);

  return (
    <div>
      {productList.map((x) => (
        <OrderdItem
          image={x?.posterImageUrl}
          title={x.title}
          arriving={x?.arriving ?? "in 3 days"}
          key="v"
        />
      ))}
    </div>
  );
};

export default PurchasedItems;
