"use client";
import { ProductContext } from "@/context/ProductContextProvider";
import React, { useContext, useEffect, useRef } from "react";

const HideScrollBar = () => {
  const {
    state: { signIn, signUp },
  } = useContext(ProductContext);
  const body = document.querySelector("body");
  console.log({ open: signIn });
  useEffect(() => {
    if (signIn || signUp) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    return () => {};
  }, [signIn, signUp]);

  // configure the MutationObserver to observe changes to the 'open' attribute

  return <div />;
};

export default HideScrollBar;
