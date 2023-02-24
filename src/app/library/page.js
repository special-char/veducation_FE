import Input from "@/components/InputComponent";
import React from "react";
import FeaturedBook from "./FeaturedBook";
import UpcomingBooks from "./UpcomingBooks";
import Search from "public/icons/Search.svg";

const Page = () => {
  return (
    <div className="h-screen pt-5 pb-40 px-container flex flex-col gap-2">
      <div className="relative">
        <Input placeholder="Find in veducation library" className="px-10" />
        <Search className="absolute top-5 left-4" />
      </div>
      <FeaturedBook />
      <UpcomingBooks />
    </div>
  );
};

export default Page;
