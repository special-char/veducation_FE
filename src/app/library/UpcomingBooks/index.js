import Btnnavigator from "@/components/Buttonnavigator";
import React from "react";
import UpcomingBookImg from "public/icons/upcomingbook.svg";

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

const UpcomingBooks = () => {
  return (
    <section className="pt-4">
      {data.map((val) => {
        return (
          <Btnnavigator
            href={""}
            key={val.title}
            icon={<UpcomingBookImg className="w-6" />}
            title={val.title}
            desc={val.desc}
          />
        );
      })}
    </section>
  );
};

export default UpcomingBooks;
