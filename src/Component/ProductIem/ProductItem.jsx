import React from "react";
import Reviews from "../Review/Reviews";
import styles from "./productItem.module.css";
import Image from "next/image";
import Book1 from "public/images/book.png";

const data = {
  src: Book1,
  name: "B.O.S.S : Basics of Sanatan Sanskriti",
  author: "Prateeik Prajapati",
};

export const ProductItem = () => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productItem__image}>
        <Image src={data.src} alt="Book" fill />
      </div>
      <div className={styles.productItem__desc}>
        <p className={styles.productItem__name}>{data.name}</p>
        <p className={styles.productItem__author}>{`by ${data.author}`}</p>
        <Reviews rate={3.5} count={23} />
      </div>
    </div>
  );
};
