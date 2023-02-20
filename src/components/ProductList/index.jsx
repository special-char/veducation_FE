import React from "react";
import styles from "./productItem.module.css";
import Image from "next/image";
import Book from "public/book.png";
import Reviews from "../Reviews";
import ProductTitle from "../ProductTitle";
import Link from "next/link";
import { getProductData } from "@/lib/getHomeProductData";

const ProductItem = ({ img, title, author, rate, count, weight, content }) => {
  return (
    <div className={styles.product_item}>
      <div className={styles.product_item__image}>
        <Image
          src={img}
          fill
          alt="book"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className={styles.product_item__desc}>
        <p className={styles.product_item__name}>{title}</p>
        <p className={styles.product_item__author}>
          {author && `by ${author}`}
        </p>
        <p className={styles.product_item__author}>{weight && weight}</p>
        <p className={styles.product_item__author}>{content && content}</p>
        <Reviews rate={rate} count={count} />
      </div>
    </div>
  );
};

const Productlist = async ({ productList }) => {
  const productData = await getProductData();
  console.log("getProductData", productData);
  const {
    attributes: { name },
  } = productData.data;

  return (
    <div className="flex flex-col">
      <ProductTitle title={name} link="View All" />
      <div className="flex overflow-x-scroll no-scrollbar gap-1">
        {productList.map((val) => {
          return (
            <Link key={val.id} href="/yoddha-store">
              <ProductItem {...val} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Productlist;
