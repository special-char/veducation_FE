"use client";
import React, { Children, useState } from "react";
import Image from "next/image";
import styles from "./orderedItem.module.css";
import Tshirt from "public/tshirt.png";
import Plus from "public/icons/plus.svg";
import Minus from "public/icons/minus.svg";
import Delete from "public/icons/delete.svg";

const OrderdItem = ({
  image,
  title,
  price,
  quantity,
  arriving,
  deliveredOn,
}) => {
  // const [arriving, setArriving] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.main__detail} key="items">
        <div className="relative aspect-square min-h-[66px]   ">
          <Image src={image} alt="item" fill className={styles.main__img} />
        </div>
        <div className={styles.main__desc}>
          <h5 className={styles.main__name}>{title}</h5>

          {price && (
            <p className={styles.main__price}>
              $ {price} | {quantity} pcs
            </p>
          )}

          {arriving && (
            <p className={styles.main__arriving}>
              Arriving by :<span className={styles.main__date}>{arriving}</span>
            </p>
          )}

          {deliveredOn && (
            <p className={styles.main__arriving}>
              delivery by :
              <span className={styles.main__date}>{deliveredOn}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderdItem;
