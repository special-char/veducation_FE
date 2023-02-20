import React from "react";
import FeaturedBook from "./FeaturedBook";
import UpcomingBooks from "./UpcomingBooks";

const Page = () => {
  return (
    <div className="h-screen pt-5 pb-40 px-container">
      <FeaturedBook />
      <UpcomingBooks />
    </div>
  );
};

export default Page;
