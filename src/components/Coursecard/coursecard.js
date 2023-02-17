import Image from "next/image";
import React from "react";
import CardImage from "public/icons/image1.png";
import Reviews from "../Reviews";
import styles from "./card.module.css";

const Coursecard = ({ img, coursetitle, duration, lessons, description }) => {
  return (
    <div className={styles.cardRoot}>
      <div className={styles.cardRoot__image}>
        <Image src={img} fill alt="" className="" />
      </div>
      <div className={styles.cardRoot__body}>
        <h5 className={styles.cardRoot__title}>{coursetitle}</h5>
        <Reviews className="text-xs text-white" count={24} />
        <span className="text-xs font-semibold text-white">
          {duration} | {lessons}
        </span>
        <br />
        <p className={styles.cardRoot__desc}>{description}</p>
      </div>
    </div>
  );
};

export default Coursecard;
