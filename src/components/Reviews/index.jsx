import React from "react";
import styles from "./reviews.module.css";
import StarFull from "public/icons/star_fill.svg";
import Star from "public/icons/star.svg";
import StarHalf from "public/icons/star_half.svg";
import ReviewStar from "./ReviewStar";

const Reviews = ({ rate, count, width, height, notDisabled = false }) => {
  const start = [1, 2, 3, 4, 5];
  return (
    <div className={styles.reviews}>
      {start.map((i) => {
        if (rate >= i) {
          return (
            <ReviewStar
              className={styles.reviews__rating}
              key={i}
              value={i}
              notDisabled={notDisabled}
            >
              <StarFull
                key={i}
                width={width}
                height={height}
                className="reviews__rating__svg"
              />
            </ReviewStar>
          );
        }
        if (i - 0.5 === rate) {
          return (
            <ReviewStar
              className={styles.reviews__rating}
              key={i}
              value={i}
              notDisabled={notDisabled}
            >
              <StarHalf
                key={i}
                width={width}
                height={height}
                className="reviews__rating__svg"
              />
            </ReviewStar>
          );
        }
        return (
          <ReviewStar
            className={styles.reviews__rating}
            key={i}
            value={i}
            notDisabled={notDisabled}
          >
            <Star
              key={i}
              width={width}
              height={height}
              className={styles.reviews__rating__svg}
            />
          </ReviewStar>
        );
      })}
      <p className="reviews__count m-0 text-base">{`(${count})`}</p>
    </div>
  );
};

export default Reviews;
