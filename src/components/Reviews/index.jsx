import React from "react";
import styles from "./reviews.module.css";
import StarFull from "public/icons/star_fill.svg";
import Star from "public/icons/star.svg";
import StarHalf from "public/icons/star_half.svg";

const Reviews = ({ rate, count, width, height }) => {
  const start = [1, 2, 3, 4, 5];
  return (
    <div className={styles.reviews}>
      {start.map((i) => {
        if (rate >= i) {
          return (
            <StarFull key={i} width={14} height={14} className="reviews__svg" />
          );
        }
        if (i - 0.5 === rate) {
          return (
            <StarHalf key={i} width={14} height={14} className="reviews__svg" />
          );
        }
        return <Star key={i} width={14} height={14} className={styles.__svg} />;
      })}
      <p className="reviews__count m-0 text-[8px]">{`(${count})`}</p>
    </div>
  );
};

export default Reviews;
