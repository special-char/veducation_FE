"use client";
import Btnnavigator from "@/components/Buttonnavigator";
import React, { useState } from "react";
import UpcomingBookImg from "public/icons/upcomingbook.svg";
import Search from "public/icons/Search.svg";
import Link from "next/link";

const Page = () => {
  const data = [
    {
      id: 1,
      title: "Book1",
      desc: "This is book1",
      href: "/readbook/book/1",
    },
    {
      id: 2,
      title: "Book2",
      desc: "This is book2",
      href: "/readbook/book/1",
    },
    {
      id: 3,
      title: "Book3",
      desc: "This is book3",
      href: "/readbook/book/1",
    },
    {
      id: 4,
      title: "Book4",
      desc: "This is book1",
      href: "/readbook/book/1",
    },
    {
      id: 5,
      title: "Book5",
      desc: "This is book5",
      href: "/readbook/book/1",
    },
  ];

  const [search, setsearch] = useState("");
  return (
    <section className="px-container md:p-0 flex flex-col pt-3 gap-2">
      <div className="relative">
        <form>
          <input
            className="w-full relative text-[#6C5A4A] text-base focus:outline-none rounded-md py-3 px-10 border bg-[#FCE9CF] border-[#F5D9B1]"
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Find in veducation library"
            name=""
            id=""
          />
        </form>
        <Search className="absolute top-4 left-4" />
      </div>
      <div className="flex flex-col gap-2">
        {data
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
                href={val.href}
                icon={<UpcomingBookImg className="w-6" />}
                title={val.title}
                desc={val.desc}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Page;
