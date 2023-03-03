import CourseDetails from "@/components/CourseDetails";
import Link from "next/link";
import React from "react";

const Page = (props) => {
  return (
    <section className="">
      <CourseDetails {...props} />
    </section>
  );
};

export default Page;
