import React, { useContext } from "react";
import Icon from "../../../public/veducationIcon.svg";
import TitleIcon from "../../../public/VEDUCATION.svg";
import Cart from "../../../public/cart.svg";
import Bell from "../../../public/bell.svg";
import styles from "./header.module.css";
import Link from "next/link";
import { ProductContext } from "@/context/ProductContext";

const Header = () => {
  const product = useContext(ProductContext);
  console.log({ product });
  return (
    <nav className={styles.headerRoot}>
      <Link href="/" className={styles.headerRoot__title}>
        <Icon />
        <TitleIcon />
      </Link>
      <div className={styles.headerRoot__rightIcon}>
        <Cart />
        <Bell />
      </div>
    </nav>
  );
};

export default Header;
