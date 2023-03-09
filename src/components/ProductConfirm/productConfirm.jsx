"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./productConfirm.module.css";
import Tshirt from "public/tshirt.png";
import Plus from "public/icons/plus.svg";
import Minus from "public/icons/minus.svg";
import Delete from "public/icons/delete.svg";
import OrderdItem from "../oderedItem/orderedItem";
import { useCartProvider } from "@/context/CartContextProvider";

const ProductConfirm = ({
  image,
  title,
  price,
  isCourse,
  quantity = 0,
  item,
  attributes,
}) => {
  const {
    updateCount,
    cartState: { cart },
  } = useCartProvider();

  const incrementCount = () => {
    updateCount(
      item.id,
      quantity + 1,
      attributes?.product?.data?.id,
      attributes?.user_id?.data?.id
    );
  };

  const decrementCount = () => {
    if (quantity > 0) {
      updateCount(
        item.id,
        quantity - 1,
        attributes?.product?.data?.id,
        attributes?.user_id?.data?.id
      );
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__detail} key="items">
        <div className="relative aspect-square min-h-[93px] py-3   ">
          <Image src={image} alt="item" fill />
        </div>
        <div className="flex flex-col place-content-center gap-2">
          <h5 className={styles.main__name}>{title}</h5>
          <div className="flex justify-between">
            {quantity > 0 && <p className={styles.main__price}>{price}</p>}
            {isCourse && (
              <button
                className={` ${styles.main__dltBtn} ${
                  quantity && quantity ? "block" : "hidden"
                }`}
              >
                <Delete />
                Delete
              </button>
            )}
          </div>

          {!isCourse && (
            <div>
              {quantity > 0 && (
                <div className={styles.main__counter}>
                  <div className="flex gap-3">
                    <button
                      onClick={decrementCount}
                      className={styles.main__counterBtn}
                    >
                      <Minus className={styles.main__counterSvg} />
                    </button>
                    <h5 className={styles.main__counterValue}>{quantity}</h5>
                    <button
                      onClick={incrementCount}
                      className={styles.main__counterBtn}
                    >
                      <Plus className={styles.main__counterSvg} />
                    </button>
                  </div>
                  <button
                    className={styles.main__dltBtn}
                    onClick={() => {
                      updateCount(
                        item.id,
                        0,
                        attributes?.product?.data?.id,
                        attributes?.user_id?.data?.id
                      );
                    }}
                  >
                    <Delete />
                    Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductConfirm;
