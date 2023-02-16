"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./orderedItem.module.css";
import Tshirt from "public/tshirt.png";
import Plus from "public/icons/plus.svg";
import Minus from "public/icons/minus.svg";
import Delete from "public/icons/delete.svg";

const items = [
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "25.00",
    quantity: "5",
    arrivingDate: "23",
    arrivingMonth: "oct",
    deliveryDate: "24",
    deliveryMonth: "oct",
    year: "2025",
  },
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "22.00",
    quantity: "5",
    arrivingDate: "23",
    arrivingMonth: "oct",
    deliveryDate: "24",
    deliveryMonth: "oct",
    year: "2025",
  },
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "50.00",
    quantity: "5",
    arrivingDate: "23",
    arrivingMonth: "oct",
    deliveryDate: "24",
    deliveryMonth: "oct",
    year: "2025",
  },
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "20.00",
    quantity: "3",
    arrivingDate: "23",
    arrivingMonth: "oct",
    deliveryDate: "24",
    deliveryMonth: "oct",
    year: "2025",
  },
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "25.00",
    quantity: "5",
    arrivingDate: "23",
    arrivingMonth: "oct",
    deliveryDate: "24",
    deliveryMonth: "oct",
    year: "2025",
  },
];

const OrderdItem = () => {
  const [arriving, setArriving] = useState(false);
  const [count, setCount] = useState(0);
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
      {items.map((x, i) => (
        <div className={styles.main__detail} key="items">
          <div className="relative aspect-square min-h-[93px]   ">
            <Image src={x.img} alt="item" fill className={styles.main__img} />
          </div>
          <div className={styles.main__desc}>
            <h5 className={styles.main__name}>{x.item}</h5>
            <p className={styles.main__price}>
              $ {x.price} | {x.quantity} pcs
            </p>
            {arriving ? (
              <p className={styles.main__arriving}>
                Arriving by :
                <span className={styles.main__date}>
                  {x.arrivingDate}th {x.arrivingMonth} {x.year}{" "}
                </span>
              </p>
            ) : (
              <p className={styles.main__arriving}>
                delivery by :
                <span className={styles.main__date}>
                  {x.deliveryDate}th {x.deliveryMonth} {x.year}{" "}
                </span>
              </p>
            )}

            <div>
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderdItem;
