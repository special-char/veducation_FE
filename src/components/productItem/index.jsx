import React from "react";
import styles from "./productItem.module.css";
import Image from "next/image";
import Book from "public/book.png";
import Reviews from "../Reviews";

const ProductItem = ({ img, title, author, rate, count }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productItem__image}>
        <Image src={img} fill alt="book" />
      </div>
      <div className={styles.productItem__desc}>
        <p className={styles.productItem__name}>{title}</p>
        <p className={styles.productItem__author}>{`by ${author}`}</p>
        <Reviews rate={rate} count={count} />
      </div>
    </div>
  );
};

const Productlist = ({ productList }) => {
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <h5 className="mb-0">Veducation Books</h5>
        <span>View all</span>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar gap-1">
        {productList.map((val) => {
          return <ProductItem key={val.title} {...val} />;
        })}
      </div>
    </>
  );
};

export default Productlist;
