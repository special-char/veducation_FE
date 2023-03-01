import CourseDetails from "@/components/CourseDetails";
import Link from "next/link";
import React from "react";

const Page = (props) => {
  return (
    <section className="pb-20">
      <CourseDetails {...props} />
    </section>
  );
};

export default Page;
