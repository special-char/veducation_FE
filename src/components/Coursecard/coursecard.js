import Image from "next/image";
import React from "react";
import CardImage from "public/icons/image1.png";
import Reviews from "../Reviews";
import styles from "./card.module.css";
import Link from "next/link";

const Coursecard = ({
  attributes: {
    title,
    rating,
    duration,
    description,
    lessons,
    img,
    count,
    ...att
  },
  ...val
}) =>
  // props
  {
    console.log({ att });
    return (
      <Link href={`/courses/${val.id}`}>
        <div className={styles.cardRoot}>
          <div className={styles.cardRoot__image}>
            <Image src={img} fill alt="" className="" />
          </div>
          <div className={styles.cardRoot__body}>
            <h5 className={styles.cardRoot__title}>{title}</h5>
            <Reviews
              className="text-xs "
              width={22}
              height={22}
              count={count ?? 1}
              rate={rating}
            />
            <span className="text-xs font-semibold text-white">
              {duration} | {lessons}
            </span>
            <br />
            <p className={styles.cardRoot__desc}>{description}</p>
          </div>
        </div>
      </Link>
    );
  };

export default Coursecard;
