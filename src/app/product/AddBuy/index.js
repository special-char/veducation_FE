"use client";
import Button from "@/components/Button";
import SignIn from "@/containers/SignIn";
import { useAppContext } from "@/context/AppContextProvider";
import { useCartProvider } from "@/context/CartContextProvider";
import { addToCart } from "@/lib/updateCart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
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

  async function onAddToCartApi() {
    // console.log({ res: { user, users, data } });
    try {
      const res = await addToCart(
        id,
        user.id,
        currentCart?.id ? currentCart.attributes.quantity + 1 : 1,
        currentCart?.id
      );
      if (res.data) {
        // console.log({ res });
        addItem(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onCartClick() {
    if (!data?.data?.user) {
      dispatch({ signIn: true });
      return;
    }
    if (currentCart?.id) {
      const res = confirm("Item is already in the cart");
      if (res) navigate.push("/cart");
      return;
    }
    onAddToCartApi();
  }

  function onBuyClick() {
    if (!data?.data?.user) {
      // const response = confirm("Please Sign up or login.... to continue");
      // if (response) navigate.push("/");
      dispatch({ signIn: true });
      return;
    }
    if (currentCart?.id) {
      const res = confirm("Item is already in the cart");
      if (res) navigate.push("/cart");
      return;
    }
    onAddToCartApi();
    navigate.push("/cart");
  }

  const {
    state: { signIn },
    dispatch,
  } = useAppContext();

  return (
    <div className={styles.ProductPage__btn}>
      <SignIn />
      <Button
        as="button"
        className="md:flex md:justify-center"
        variant={"secondary"}
        size={"large"}
        onClick={onCartClick}
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
        onClick={onBuyClick}
      >
        Buy now
      </Button>
    </div>
  );
};

export default AddBuy;
