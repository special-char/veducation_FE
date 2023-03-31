"use client";
import SignIn from "@/containers/SignIn";
import { useAppContext } from "@/context/AppContextProvider";
import { useCartProvider } from "@/context/CartContextProvider";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../Button";

const EnrollCourse = (props) => {
  const {
    state: { signIn },
    dispatch,
  } = useAppContext();
  const data = useSession();
  const navigate = useRouter();

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
    try {
      const res = await addToCart(
        id,
        user.id,
        currentCart?.id ? currentCart.attributes.quantity + 1 : 1,
        currentCart?.id
      );
      if (res.data) {
        addItem(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function onBuyClick() {
    if (!data?.data?.user) {
      // const response = confirm("Please Sign... up or login to continue");
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
    navigate.push(`/cart?course=${props?.params?.id}`);
  }
  return (
    <div>
      <SignIn />
      <Button
        as="button"
        // href={`/cart?course=${props?.params?.id}`}
        prefetch={false}
        variant={"primary"}
        size={"small"}
        className="w-full text-base"
        onClick={onBuyClick}
      >
        Enroll Now
      </Button>
    </div>
  );
};

export default EnrollCourse;
