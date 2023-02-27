"use client";
import React, { useState } from "react";
import styles from "./courseCart.module.css";
import Send from "public/send.svg";
import Promo from "public/promoCode.svg";
import Image from "next/image";
import Img from "public/img.png";
import Delete from "public/delete.svg";
import Button from "@/components/Button";
import Link from "next/link";
import Input from "@/components/InputComponent";

const data = {
  orderPrice: "75",
  totalAmount: "95",
};

const CourseCart = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    setSearchValue("");
  };

  return (
    <div className={styles.main}>
      {/* <div className={styles.main__detail} key="items">
        <div className={styles.main__imgdiv}>
          <Image src={Img} alt="item" className={styles.main__img} />
        </div>
        <div className={styles.main__desc}>
          <h5 className={styles.main__name}>
            Veducation T Shirt - Mens Tshirt Pure Black
          </h5>
          <div className={styles.main__cart}>
            <p className={styles.main__price}>$ 55</p>
            <button className={styles.main__dltBtn}><Delete />Delete</button>
          </div>
        </div>
      </div> */}

      <div className={styles.main__textbox}>
        {/* <input
          type="text"
          placeholder="Enter your promoCode"
          value={searchValue}
          onChange={(x) => setSearchValue(x.target.value)}
          className={styles.main__input}
        /> */}
        <div>
          <Input
            type="text"
            placeholder="Enter your promoCode"
            value={searchValue}
            onChange={(x) => setSearchValue(x.target.value)}
            className={"px-9"}
          />

          <Promo className={styles.main__promo} />
        </div>
        <div className={styles.main__btndiv}>
          <button className={styles.main_sendbtn} onClick={handleSearch}>
            <Send />
          </button>
        </div>
      </div>
      <div className={styles.main__orderDetail}>
        <div className={styles.main__order}>
          <h6 className={styles.main__orderData}>Order:</h6>
          <h6 className={styles.main__orderData}>${data.orderPrice}</h6>
        </div>

        <div className={styles.main__total}>
          <h3 className={styles.main__orderData}>Total:</h3>
          <h3>${data.totalAmount}</h3>
        </div>
      </div>

      <div>
        {/* <button className={styles.main__button}>Check out</button> */}
        <Button
          as={Link}
          href="/billingdetails"
          variant="primary"
          className="w-full p-3"
          size={"large"}
        >
          Check out
        </Button>
      </div>
    </div>
  );
};

export default CourseCart;
