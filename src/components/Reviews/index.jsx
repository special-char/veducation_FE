import React from "react";
import StarIcon from "public/icons/star.svg";
import StarHalfIcon from "public/icons/star_half.svg";
import StarFillIcon from "public/icons/star_fill.svg";
import styles from "./reviews.module.css";

const Reviews = ({ rate, count }) => {
  return (
    <div className={styles.reviews}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        if (rate >= item) {
          return (
            <StarFillIcon
              key={item}
              height={24}
              width={24}
              className="fill-primary2"
            />
          );
        }

        return (
          <StarIcon
            key={item}
            height={18}
            width={18}
            className="fill-primary2"
          />
        );
      })}

      {/* {rate >= item ? <StarIcon /> : rate >= (count + 0.5)(<StarHalfIcon />)} */}
      <p className="reviews__count">{`(${count})`}</p>
    </div>
  );
};

export default Reviews;
