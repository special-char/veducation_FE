"use client";
import ProductConfirm from "@/components/ProductConfirm/productConfirm";
import { useCartProvider } from "@/context/CartContextProvider";
import { useAppContext } from "@/context/AppContextProvider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const CartItemList = () => {
  const {
    cartState: { cart },
  } = useCartProvider();

  return (
    <div>
      {cart.map(({ attributes: x, ...item }) => {
        return (
          <ProductConfirm
            image={x?.product?.data?.attributes?.posterImageUrl}
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
