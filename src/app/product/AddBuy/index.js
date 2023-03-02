"use client";
import Button from "@/components/Button";
import { useCartProvider } from "@/context/CartContextProvider";
import { useProductsContext } from "@/context/ProductContextProvider";
import { getCartItems } from "@/lib/getCartItems";
import { addToCart } from "@/lib/updateCart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import styles from "../[id]/product.module.css";

const AddBuy = ({ id, users }) => {
  const data = useSession();
  const navigate = useRouter();
  const user = users?.find((item) => item.email === data?.data?.user?.email);
  const {
    addItem,
    cartState: { cart },
  } = useCartProvider();

  let currentCart = cart?.find((item) => {
    if (
      item?.attributes?.product?.data?.id === Number(id) &&
      item?.attributes?.user_id?.data?.id === user?.id
    ) {
      return item;
    }
  });

  async function onAddToCart() {
    try {
      const res = await addToCart(
        id,
        user.id,
        currentCart?.id ? currentCart.attributes.quantity + 1 : 1,
        currentCart?.id
      );
      if (res.data) {
        addItem(res.data);
        // cartItems.attributes.quantity = res.data.attributes.quantity + 1;
        // const items = use(getCartItems());
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.ProductPage__btn}>
      <Button
        as="button"
        className="md:flex md:justify-center"
        variant={"secondary"}
        size={"large"}
        onClick={onAddToCart}
      >
        {currentCart?.id ? "Add another to cart" : "Add to cart"}
      </Button>
      <Button
        as="button"
        className={" md:flex md:justify-center"}
        href=""
        prefetch={false}
        variant={"primary"}
        size={"large"}
      >
        Buy now
      </Button>
    </div>
  );
};

export default AddBuy;
