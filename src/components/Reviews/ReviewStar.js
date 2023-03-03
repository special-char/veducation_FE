"use client";
import { useAppContext } from "@/context/AppContextProvider";
import { addRatings } from "@/lib/getRatings";
import { usePathname } from "next/navigation";
import React from "react";

const ReviewStar = ({
  children,
  value,
  className,
  notDisabled,
  id,
  slug = "course" | "product" | "book",
}) => {
  const payloadObj = {};
  payloadObj[slug] = id;
  const app = useAppContext();
  const {
    state: {
      user: { id: user_id },
    },
  } = app;
  console.log(
    {
      user_id: user_id,
      ...(slug && { ...payloadObj }),
      rating: value,
    },
    payloadObj
  );
  const onRatingClick = async () => {
    try {
      const response = await addRatings({
        user_id: user_id,
        ...(slug && { ...payloadObj }),
        rating: value,
      });
      console.log({ ratingResponse: response });
      // console.log(value, id, user_id);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className={className}
      disabled={notDisabled}
      onClick={onRatingClick}
    >
      {children}
    </button>
  );
};

export default ReviewStar;
