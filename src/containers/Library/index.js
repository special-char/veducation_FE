"use client";
import FormikForm from "@/components/FormikForm";
import React, { useState } from "react";
import Search from "public/icons/Search.svg";
import Input from "@/components/InputComponent";
import FeaturedBook from "./FeaturedBook";
import UpcomingBooks from "./UpcomingBooks";
import { Form } from "formik";
import Btnnavigator from "@/components/Buttonnavigator";
import UpcomingBookImg from "public/icons/upcomingbook.svg";
import Link from "next/link";

const Library = ({ allbooks }) => {
  const [search, setsearch] = useState("");
  console.log("search", search);
  const allbooksdata = allbooks.data;
  console.log("allbooksdata >...", allbooksdata);
  return (
    <div className="h-screen pt-3 xs:px-container md:px-0 flex flex-col gap-2">
      <div className="relative">
        <form>
          <input
            className="w-full relative text-[#6C5A4A] text-base focus:outline-none rounded-md py-2 px-10 border bg-[#FCE9CF] border-[#F5D9B1]"
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Find in veducation library"
            name=""
            id=""
          />
          {/* <Input
          
            field={{ name: "search", error: "search" }}
            form={{ touched: {}, errors: {} }}
            placeholder="Find in veducation library"
            className="px-[36px] rounded-xl"
          /> */}
        </form>
        {/* <FormikForm fields={searchField} initialValues={searchInitValue} /> */}
        <Search className="absolute top-3 left-4" />
      </div>
      <FeaturedBook />
      {/* <UpcomingBooks search={search} data={allbooks} /> */}
      <div className="flex flex-col gap-1">
        {allbooksdata
          .filter((val) => {
            return search.toLowerCase() === ""
              ? val
              : val.attributes?.title.toLowerCase().includes(search);
          })
          .map((val, index) => {
            return (
              <Btnnavigator
                key={index}
                component={Link}
                href={""}
                icon={<UpcomingBookImg className="w-6" />}
                title={val.attributes?.title}
                desc={val.attributes?.description}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Library;

// href={`/library/books/${val.id}`}
