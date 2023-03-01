import Btnnavigator from "@/components/Buttonnavigator";
import React from "react";
import UpcomingBookImg from "public/icons/upcomingbook.svg";
import Link from "next/link";
import { getAllBooksData } from "@/lib/getAllBooksData";

const data = [
  {
    title: "Upcoming Books",
    desc: "this is books",
  },
  {
    title: "Upcoming Books",
    desc: "this is books",
  },
  {
    title: "Upcoming Books",
    desc: "this is books",
  },
  {
    title: "Upcoming Books",
    desc: "this is books",
  },
  {
    title: "Upcoming Books",
    desc: "this is books",
  },
];

const UpcomingBooks = async () => {
  const { data } = await getAllBooksData();
  return (
    <section className="pt-4">
      {data?.map((val, index) => {
        return (
          <Btnnavigator
            key={index}
            href={`/library/books/${val.id}`}
            icon={<UpcomingBookImg className="w-6" />}
            title={val.attributes?.title}
            desc={val.attributes?.description}
          />
        );
      })}
    </section>
  );
};

export default UpcomingBooks;
