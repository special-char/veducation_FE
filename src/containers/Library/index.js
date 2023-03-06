import FormikForm from "@/components/FormikForm";
import React from "react";
import Search from "public/icons/Search.svg";
import Input from "@/components/InputComponent";
import FeaturedBook from "./FeaturedBook";
import UpcomingBooks from "./UpcomingBooks";

const Library = () => {
  return (
    <div className="h-screen pt-5 xs:px-container md:px-0 flex flex-col gap-2">
      <div className="relative">
        <Input
          field={{ name: "search", error: "search" }}
          form={{ touched: {}, errors: {} }}
          placeholder="Find in veducation library"
          className="px-[36px] rounded-xl"
        />
        {/* <FormikForm fields={searchField} initialValues={searchInitValue} /> */}
        <Search className="absolute top-5 left-4" />
      </div>
      <FeaturedBook />
      <UpcomingBooks />
    </div>
  );
};

export default Library;
