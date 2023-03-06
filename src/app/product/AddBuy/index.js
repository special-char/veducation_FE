"use client";
import Button from "@/components/Button";
import { useAppContext } from "@/context/AppContextProvider";
import { useCartProvider } from "@/context/CartContextProvider";
import { addToCart, updateCart } from "@/lib/updateCart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import styles from "../[id]/product.module.css";

const AddBuy = ({ id, users }) => {
  const data = useSession();

  const navigate = useRouter();

  const user = users?.find((item) => item.email === data?.data?.user?.email);

  const {
    addItem,
    cartState: { cart },
  } = useCartProvider();

  const currentCart = cart?.find((item) => {
    if (item?.attributes?.product?.data?.id == id) {
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
        // navigate.navigate.replace(`/product/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onUpdateCart() {
    try {
      updateCart(currentCart?.id, {
        quantity: currentCart?.attributes?.quantity + 1,
      });
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
        onClick={() => {
          if (!data?.data?.user) {
            const response = confirm("Please Sign up or login to continue");
            if (response) navigate.push("/");
            return;
          }
          if (currentCart?.id) {
            const res = confirm("Item is already in the cart");
            if (res) navigate.push("/cart");
            return;
          }
          onAddToCart();
        }}
      >
        {currentCart?.id ? "Added to cart" : "Add to cart"}
      </Button>
      <Button
        as="button"
        className={" md:flex md:justify-center"}
        href=""
        prefetch={false}
        variant={"primary"}
        size={"large"}
        onClick={() => {
          if (!data?.data?.user) {
            const response = confirm("Please Sign up or login to continue");
            if (response) navigate.push("/");
            return;
          }
          navigate.push("/cart");
        }}
      >
        Buy now
      </Button>
    </div>
  );
};

export default AddBuy;
