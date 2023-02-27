import React from "react";
import Btnnavigator from "../Buttonnavigator";
import UpcomingBookImg from "public/icons/upcomingbook.svg";
import SearchIcon from "public/icons/Search.svg";
import ArrowIcon from "public/icons/arrow.svg";

import Input from "../InputComponent";
import Link from "next/link";

const data = [
  {
    title: "bhagva purana",
    desc: "A Book with the knowledge that all the Sanatani Hindu",
  },
  {
    title: "bhagva purana",
    desc: "A Book with the knowledge that all the Sanatani Hindu",
  },
  {
    title: "bhagva purana",
    desc: "A Book with the knowledge that all the Sanatani Hindu",
  },
  {
    title: "bhagva purana",
    desc: "A Book with the knowledge that all the Sanatani Hindu",
  },
  {
    title: "bhagva purana",
    desc: "A Book with the knowledge that all the Sanatani Hindu",
  },
];

const AllBooks = () => {
  return (
    <section>
      <div className="py-3 relative">
        <SearchIcon className="absolute bottom-7 left-3 " />
        <Input className={"px-8"} placeholder="Find in veducation library" />
      </div>
      <nav>
        <ul className="flex">
          <li className="px-2 text-base">Shashtra</li>
          <ArrowIcon className=" my-2" />
          <li className="px-2 text-base">Purana</li>
          <ArrowIcon className=" my-2" />
          <li className="px-2 text-base">Bhagvat Purana</li>
        </ul>
      </nav>
      <div>
        {data.map((val, index) => {
          return (
            <Btnnavigator
              key={val.title}
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

export default AllBooks;
