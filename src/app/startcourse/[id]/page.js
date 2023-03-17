import AllLessons from "@/components/AllLessons/AllLessons";
import BannerCourses from "@/components/BannerCourses/BannerCourses";
import StartCourse from "@/containers/startcourse";
import React from "react";

const Page = (props) => {
  return (
    <StartCourse {...props} />
    // <section className="py-4 px-container md:px-0 pt-10">
    //   <BannerCourses />
    //   <AllLessons />
    // </section>
  );
};

export default Page;
