"use client";
import Reviews from "@/components/Reviews";
import { useRatingContext } from "@/context/RatingContext";
import React from "react";

const RatingComponent = ({ rate, ...props }) => {
  const {
    rateState: { ratings },
  } = useRatingContext();

  const currentRating = ratings.find((r) => r.id === props.ratingId);
  console.log({ currentRating });

  return (
    <Reviews {...props} rate={currentRating?.attributes?.rating ?? rate} />
  );
};

export default RatingComponent;
