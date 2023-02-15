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

const ProductList = ({ data }) => {
  return (
    <section className="px-container">
      <div className={"flex  justify-between mx-auto"}>
        <h1 className={"text-[#303030] md:text-5xl text-sm"}>Donations</h1>
        <a
          href="#View"
          className={"underline text-[#303030] text-[12px] font-normal"}
        >
          View all
        </a>
      </div>
      <div className="flex overflow-x-scroll gap-1 px-container no-scrollbar">
        {data.map((val) => {
          return (
            <ProductItem
              key={val.name}
              img={val.src}
              title={val.name}
              author={val.author}
              rate={4}
              count={21}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
