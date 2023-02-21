import Image from "next/image";
import React from "react";
import Tshirt from "public/icons/tshirt.png";
import Reviews from "../../../components/Reviews";
import Button from "../../../components/Button";
import Link from "next/link";
import styles from "./product.module.css";

const Page = () => {
  return (
    <section className={styles.ProductPage}>
      <div className={styles.ProductPage__image}>
        <Image src={Tshirt} alt={"tshirt image"} fill />
      </div>
      <div className={styles.ProductPage__body}>
        <div>
          <p className={styles.ProductPage__ptag}>
            Delivery by Monday, 23 January
          </p>
          <h3>Veducation T Shirt - Mens Tshirt Pure Black</h3>
          <Reviews rate={4} count={"25k"} />
        </div>
        <div className={styles.ProductPage__title}>
          <p className={styles.ProductPage__price}>$ 25.00</p>
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
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <div className={styles.ProductPage__btn}>
          <Button
            as={Link}
            href=""
            prefetch={false}
            variant={"secondary"}
            size={"large"}
          >
            Add to cart
          </Button>
          <Button
            as={Link}
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
