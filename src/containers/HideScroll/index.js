"use client";
import { ProductContext } from "@/context/ProductContextProvider";
import React, { useContext, useEffect, useRef } from "react";

const HideScrollBar = () => {
  const {
    state: { signIn },
  } = useContext(ProductContext);
  const body = document.querySelector("body");
  console.log({ open: signIn });
  useEffect(() => {
    if (signIn) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    return () => {};
  }, [signIn]);

  // configure the MutationObserver to observe changes to the 'open' attribute

  return <div />;
};

export default HideScrollBar;