import AllLessons from "@/components/AllLessons/AllLessons";
import BannerCourses from "@/components/BannerCourses/BannerCourses";
import React from "react";

const Page = () => {
  return (
    <section className="py-4 px-container md:px-0 pt-10">
      <BannerCourses />
      <AllLessons />
    </section>
  );
};

export default Page;
