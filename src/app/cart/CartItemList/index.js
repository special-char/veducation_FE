"use client";
import ProductConfirm from "@/components/ProductConfirm/productConfirm";
import { useCartProvider } from "@/context/CartContextProvider";
import { useAppContext } from "@/context/AppContextProvider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { baseUrl } from "@/utils/constants";

const CartItemList = () => {
  const {
    cartState: { cart },
  } = useCartProvider();

  console.log({ cart });

  return (
    <div>
      {cart.map(({ attributes: x, ...item }) => {
        const url =
          x?.product?.data?.attributes?.posterImageUrl?.data?.attributes?.url;
        const imageUrl = new URL(url, baseUrl).href;

        console.log({ imageUrl, url: x });

        return (
          <ProductConfirm
            image={imageUrl}
            title={x?.product?.data?.attributes?.title}
            price={`$${x?.product?.data?.attributes?.price}`}
            quantity={x?.quantity}
            key={x?.id}
            item={item}
            attributes={x}
          />
        );
      })}
    </div>
  );
};

export default CartItemList;
