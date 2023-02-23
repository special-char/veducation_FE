// "use client";
import Image from "next/image";
import React from "react";
import Tshirt from "public/icons/tshirt.png";
import Reviews from "../../../components/Reviews";
import Button from "../../../components/Button";
import Link from "next/link";
import styles from "./product.module.css";
import { getProductData } from "@/lib/getHomeProductData";

const Page = async (props) => {
  const productData = await getProductData(props?.params?.id);
  const { title, name, posterImageUrl, price, description } =
    productData?.data?.attributes;

  return (
    <section className={styles.ProductPage}>
      <div className={styles.ProductPage__image}>
        <Image src={posterImageUrl} alt={name} fill />
      </div>
      <div className={styles.ProductPage__body}>
        <div>
          <p className={styles.ProductPage__ptag}>
            Delivery by Monday, 23 January
          </p>
          <h3>{title}</h3>
          <Reviews rate={4} count={"25k"} />
        </div>
        <div className={styles.ProductPage__title}>
          <p className={styles.ProductPage__price}>{price}</p>
          <div className={styles.ProductPage__count}>
            <Button
              as={Link}
              href=""
              prefetch={false}
              variant={"count"}
              size={"count"}
            >
              +
            </Button>
            <p className={styles.ProductPage__item}>01</p>
            <Button
              as={Link}
              href=""
              prefetch={false}
              variant={"count"}
              size={"count"}
            >
              -
            </Button>
          </div>
        </div>
        <p>{description}</p>
        <div className={styles.ProductPage__btn}>
          <Button
            as={Link}
            href=""
            className={" md:flex md:justify-center"}
            prefetch={false}
            variant={"secondary"}
            size={"large"}
            // onClick={() => {
            //   console.log("add to cart");
            // }}
          >
            Add to cart
          </Button>
          <Button
            as={Link}
            className={" md:flex md:justify-center"}
            href=""
            prefetch={false}
            variant={"primary"}
            size={"large"}
          >
            Buy now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Page;
