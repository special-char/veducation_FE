import Image from "next/image";
import React from "react";
import CardImage from "public/icons/image1.png";
import Reviews from "../Reviews";
import styles from "./card.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Coursecard = (
  {
    attributes: {
      title,
      rating,
      duration,
      description,
      lessons,
      img,
      count,
      isPurchased,
      user_id,
      ...rest
    },
    ...val
  },
  users
) => {
  const user = users?.find((item) => item.email === data?.data?.user?.email);
  console.log("rest:", rest);
  console.log("user_id:", user_id?.data?.attributes?.email);
  console.log("user_email_session:", user);
  return (
    <Link
      href={
        user_id?.data?.attributes?.email == user?.email
          ? `/courses/${val.id}`
          : `/startcourse/${val.id}`
      }
    >
      {/* <Link href={`/courses/${val.id}`}> */}
      <div className={styles.cardRoot}>
        <div className={styles.cardRoot__image}>
          <Image src={img} fill alt="" className="" />
        </div>
        <div className={styles.cardRoot__body}>
          <h4 className={styles.cardRoot__title}>{title}</h4>
          <Reviews
            className="text-base "
            width={22}
            height={22}
            count={count ?? 1}
            rate={rating}
            disabled
            isCourse
          />
          <span className="text-sm font-semibold text-white">
            {duration} | {lessons}
          </span>

          <p className={styles.cardRoot__desc}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Coursecard;
