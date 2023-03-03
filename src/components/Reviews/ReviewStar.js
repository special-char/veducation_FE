"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ReviewStar = ({ children, value, className, notDisabled }) => {
  const pathname = usePathname();
  // const notDisabled = !!Number(
  //   pathname.split("/")[pathname.split("/").length - 1]
  // );
  const onRatingClick = () => {
    console.log(value);
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
