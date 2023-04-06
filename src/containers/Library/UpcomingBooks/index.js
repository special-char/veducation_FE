import Btnnavigator from "@/components/Buttonnavigator";
import React from "react";
import UpcomingBookImg from "public/icons/upcomingbook.svg";
import { getAllBooksData } from "@/lib/getAllBooksData";
import Link from "next/link";

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

const UpcomingBooks = ({ data, search }) => {
  //const { data } = await getAllBooksData();
  const allbooks = data.data;
  return (
    <section className="pt-1 flex flex-col gap-2">
      {allbooks
        .filter((val) => {
          return search.toLowerCase() === ""
            ? val
            : val.title.toLowerCase().includes(search);
        })
        .map((val, index) => {
          return (
            <Btnnavigator
              key={index}
              component={Link}
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
