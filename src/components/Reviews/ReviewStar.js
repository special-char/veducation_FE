"use client";
import { useAppContext } from "@/context/AppContextProvider";
import { useRatingContext } from "@/context/RatingContext";
import { addRatings, updateRating } from "@/lib/getRatings";
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
  ratingId,
}) => {
  const payloadObj = {};
  payloadObj[slug] = id;
  const app = useAppContext();
  const { rateState, addRating, updateContextRating } = useRatingContext();
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

      if (ratingId) {
        const response = await updateRating(
          {
            rating: value,
          },
          ratingId
        );
        console.log({ updateRating: response.data });
        updateContextRating(response?.data);
        return;
      }
      const response = await addRatings({
        user_id: user_id,
        ...(slug && { ...payloadObj }),
        rating: value,
      });
      addRating(response?.data);
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
