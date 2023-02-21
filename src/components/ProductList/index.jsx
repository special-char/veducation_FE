import React from "react";
import styles from "./productItem.module.css";
import Image from "next/image";
import Book from "public/book.png";
import Reviews from "../Reviews";
import ProductTitle from "../ProductTitle";
import Link from "next/link";
import { getProductData } from "@/lib/getHomeProductData";

const ProductItem = async ({
  attributes: { posterImageUrl, title, author },
}) => {
  console.log("props", title);
  // const productData = await getProductData();
  // console.log("getProductData", productData);
  // const {
  //   attributes: { posterImageUrl, title, author, rate, count, weight, content },
  // } = productData?.data;

  return (
    <div className={styles.product_item}>
      <div className={styles.product_item__image}>
        <Image
          src={posterImageUrl}
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
        {/* <p className={styles.product_item__author}>{weight && weight}</p>
        <p className={styles.product_item__author}>{content && content}</p> */}
        {/* <Reviews rate={rate} count={count} /> */}
      </div>
    </div>
  );
};

const Productlist = async ({ id }) => {
  const productData = await getProductData(id);
  console.log("getProductData", productData);
  const {
    attributes: { name, products },
  } = productData?.data;

  return (
    <div className="flex flex-col">
      <ProductTitle title={name} link="View All" />
      <div className="flex overflow-x-scroll no-scrollbar gap-1">
        {products?.data.map((val) => {
          return (
            <Link key={val.id} href={`/product/${val.id}`}>
              <ProductItem {...val} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Productlist;
