import StartCourse from "@/containers/startcourse/index";
import React from "react";

const Page = (props) => {
  return (
    <div className="">
      <StartCourse {...props} />
    </div>
    // <section className="py-4 px-container md:px-0 pt-10">
    //   <BannerCourses />
    //   <AllLessons />
    // </section>
  );
};

export default Page;
