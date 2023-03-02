"use client";
import React, { use, useContext, useEffect } from "react";
import Icon from "../../../public/veducationIcon.svg";
import TitleIcon from "../../../public/VEDUCATION.svg";
import Cart from "../../../public/cart.svg";
import Bell from "../../../public/bell.svg";
import styles from "./header.module.css";
import Link from "next/link";
import ProductContextProvider, {
  ProductContext,
} from "@/context/ProductContextProvider";
import { useCartProvider } from "@/context/CartContextProvider";
import { getCartItems } from "@/lib/getCartItems";

const Header = (props) => {
  const {
    state: { notifications },
  } = useContext(ProductContext);
  const {
    addItem,
    cartState: { cart },
  } = useCartProvider();

  useEffect(() => {
    // const defaultCartItems = use(getCartItems());
    addItem(props.data);
    return () => {};
  }, []);

  console.log({ props });
  return (
    <ProductContextProvider>
      <nav className={styles.headerRoot}>
        <Link href="/" className={styles.headerRoot__title}>
          <Icon />
          <TitleIcon />
        </Link>
        <div className={styles.headerRoot__rightIcon}>
          <Link href={"/cart?products"}>
            <Cart
              onClick={() => {
                console.log("cart");
              }}
            />
          </Link>
          {cart.length !== 0 && (
            <span className={styles.headerRoot__rightIcon__floatNum}>
              {cart.length}
            </span>
          )}

          <Bell
            onClick={() => {
              console.log("bell");
            }}
          />
          {notifications !== 0 && (
            <span className={styles.headerRoot__rightIcon__floatNum}>
              {notifications}
            </span>
          )}
        </div>
      </nav>
    </ProductContextProvider>
  );
};

export default Header;
