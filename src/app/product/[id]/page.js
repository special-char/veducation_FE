import React from "react";
import Reviews from "../../../components/Reviews";
import styles from "./product.module.css";
import { getProductData } from "@/lib/getHomeProductData";
import Image from "next/image";
import AddBuy from "../AddBuy";
import { getUser } from "@/lib/getUser";
import { getCartItems } from "@/lib/getCartItems";
import { getRating } from "@/lib/getRatings";
import RatingComponent from "../../../components/RatingComponent";

const Page = async (props) => {
  const productData = await getProductData(props?.params?.id);

  const user = await getUser();

  const cartItems = await getCartItems();

  const { title, name, posterImageUrl, price, description } =
    productData?.data?.attributes;

  const ratingId = productData?.data?.attributes?.ratings?.data[0]?.id;
  const rating = await getRating(ratingId);

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
          <RatingComponent
            ratingId={ratingId}
            slug={"product"}
            id={props?.params?.id}
            rate={rating?.data?.attributes?.rating}
            count={"25k"}
            height={22}
            width={22}
          />
        </div>
        <div className={styles.ProductPage__title}>
          <p className={styles.ProductPage__price}>{`$${price}`}</p>
        </div>
        <p>{description}</p>
        <AddBuy
          id={props?.params?.id}
          users={user}
          cartItems={cartItems?.data}
        />
      </div>
    </section>
  );
};

export default Page;
