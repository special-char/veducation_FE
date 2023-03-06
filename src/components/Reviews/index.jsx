import React from "react";
import styles from "./reviews.module.css";
import StarFull from "public/icons/star_fill.svg";
import Star from "public/icons/star.svg";
import StarHalf from "public/icons/star_half.svg";
import ReviewStar from "./ReviewStar";
import clx from "classnames";

const Reviews = ({
  rate,
  count,
  width,
  height,
  disabled = false,
  id,
  slug = "product" | "course" | "book",
  isCourse = false,
  ratingId,
}) => {
  const start = [1, 2, 3, 4, 5];
  return (
    <div className={styles.reviews}>
      {start.map((i) => {
        if (rate >= i) {
          return (
            <ReviewStar
              slug={slug}
              className={styles.reviews__rating}
              id={id}
              key={i}
              value={i}
              ratingId={ratingId}
              disabled={disabled}
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
              slug={slug}
              className={styles.reviews__rating}
              id={id}
              key={i}
              value={i}
              disabled={disabled}
              ratingId={ratingId}
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
            slug={slug}
            className={styles.reviews__rating}
            id={id}
            key={i}
            value={i}
            disabled={disabled}
            ratingId={ratingId}
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
      <p
        className={clx(
          `reviews__count m-0 text-base mb-0 text-[#222] font-bold`,
          {
            "text-[#fff]": isCourse,
          }
        )}
      >{`(${count})`}</p>
    </div>
  );
};

export default Reviews;
