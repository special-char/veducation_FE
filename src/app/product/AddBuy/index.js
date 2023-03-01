"use client";
import Button from "@/components/Button";
import { addToCart } from "@/lib/updateCart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "../[id]/product.module.css";

const AddBuy = ({ id, users, cartItems }) => {
  const data = useSession();
  console.log({ data: data.data.user.accessToken });
  const navigate = useRouter();
  const user = users?.find((item) => item.email === data?.data?.user?.email);
  async function onAddToCart() {
    try {
      const res = await addToCart(id, user.id);
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
        Add to cart
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
