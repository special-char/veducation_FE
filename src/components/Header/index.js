"use client";
import React, { useContext } from "react";
import Icon from "../../../public/veducationIcon.svg";
import TitleIcon from "../../../public/VEDUCATION.svg";
import Cart from "../../../public/cart.svg";
import Bell from "../../../public/bell.svg";
import styles from "./header.module.css";
import Link from "next/link";
import ProductContextProvider, {
  ProductContext,
} from "@/context/ProductContextProvider";

const Header = () => {
  const { cartItems, notifications } = useContext(ProductContext);
  console.log({ cartItems, notifications });
  return (
    <ProductContextProvider>
      <nav className={styles.headerRoot}>
        <Link href="/" className={styles.headerRoot__title}>
          <Icon />
          <TitleIcon />
        </Link>
        <div className={styles.headerRoot__rightIcon}>
          <Cart
            onClick={() => {
              console.log("cart");
            }}
          />
          {cartItems !== 0 && (
            <span className={styles.headerRoot__rightIcon__floatNum}>
              {cartItems}
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
