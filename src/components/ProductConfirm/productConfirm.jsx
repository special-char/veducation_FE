"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./productConfirm.module.css";
import Tshirt from "public/tshirt.png";
import Plus from "public/icons/plus.svg";
import Minus from "public/icons/minus.svg";
import Delete from "public/icons/delete.svg";
import OrderdItem from "../oderedItem/orderedItem";


// const item={
//   img:Tshirt,
//   item:"Veducation T Shirt - Mens Tshirt Pure Black",
//   price:"25.00",
//   totalpcs:"3pcs",
//   arriving:"12 june",
//   deliveredOn:"13 june"
// }

const ProductConfirm = ({ image, title, price }) => {
  const [arriving, setArriving] = useState(false);
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__detail} key="items">
        <div className="relative aspect-square min-h-[93px]   ">
          <Image src={image} alt="item" fill className={styles.main__img} />
        </div>
        <div className={styles.main__desc}>
          <h5 className={styles.main__name}>{title}</h5>
          {count > 0 && (
            <p className={styles.main__price}>
              $ {count * price}
              {/* | {count} pcs */}
            </p>
          )}

          <div>
            {count > 0 && (
              <div className={styles.main__counter}>
                <button
                  onClick={decrementCount}
                  className={styles.main__counterBtn}
                >
                  <Minus className={styles.main__counterSvg} />
                </button>
                <h5 className={styles.main__counterValue}>{count}</h5>
                <button
                  onClick={incrementCount}
                  className={styles.main__counterBtn}
                >
                  <Plus className={styles.main__counterSvg} />
                </button>

                <button
                  className={styles.main__dltBtn}
                  onClick={() => setCount(0)}
                >
                  <Delete />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductConfirm;
