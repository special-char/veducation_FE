"use client";
import { useAppContext } from "@/context/AppContextProvider";
import { addRatings } from "@/lib/getRatings";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ReviewStar = ({
  children,
  value,
  className,
  disabled,
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
  const user = useSession();
  const navigate = useRouter();
  const onRatingClick = async () => {
    try {
      if (!user?.data?.user) {
        confirm("Please sign in to continue");
        // if (response) navigate.push("/");
        return;
      }
      const response = await addRatings({
        user_id: user_id,
        ...(slug && { ...payloadObj }),
        rating: value,
      });
      console.log({ ratingResponse: response });
    } catch (error) {
      console.error(error);
    }
  };

  const isDisabled = user?.data?.user && disabled;

  return (
    <button className={className} disabled={isDisabled} onClick={onRatingClick}>
      {children}
    </button>
  );
};

export default ReviewStar;
