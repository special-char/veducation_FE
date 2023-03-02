"use client";
import ProductConfirm from "@/components/ProductConfirm/productConfirm";
import { useCartProvider } from "@/context/CartContextProvider";
import { useProductsContext } from "@/context/ProductContextProvider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartItemList = () => {
  const {
    cartState: { cart },
  } = useCartProvider();
  const { dispatch } = useProductsContext();
  const user = useSession();
  const navigate = useRouter();
  console.log({ userfromItems: user.data });
  useEffect(() => {
    if (!user.data) {
      navigate.push("/");
      dispatch({ signIn: true });
    }
    return () => {};
  }, []);

  const items = [];
  return (
    <div>
      {cart.map(({ attributes: x, ...item }) => {
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
