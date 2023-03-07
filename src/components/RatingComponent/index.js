"use client";
import Reviews from "@/components/Reviews";
import { useRatingContext } from "@/context/RatingContext";
import React from "react";

const RatingComponent = (props) => {
  const {
    rateState: { ratings },
  } = useRatingContext();

  const rate = ratings.find(
    (r) => r?.attributes[props.slug]?.data?.id == props?.id
  );

  return (
    <Reviews
      {...props}
      ratingId={rate?.id ?? props.ratingId}
      rate={rate?.attributes?.rating ?? props.rate}
    />
  );
};

export default RatingComponent;
