"use client";
import ProductConfirm from "@/components/ProductConfirm/productConfirm";
import { useCartProvider } from "@/context/CartContextProvider";
import React from "react";

const CartItemList = () => {
  const {
    cartState: { cart },
  } = useCartProvider();
  console.log({ cart }, "from cart list ");
  const items = [];
  return (
    <div>
      {cart.map(({ attributes: x, ...item }) => {
        console.log({ x, item });
        return (
          <ProductConfirm
            image={x?.product?.data?.attributes?.posterImageUrl}
            title={x?.product?.data?.attributes?.name}
            price={x?.price}
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
