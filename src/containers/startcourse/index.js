import React from "react";
import AllLessons from "@/components/AllLessons/AllLessons";
import BannerCourses from "@/components/BannerCourses/BannerCourses";
import { getCourseDetails } from "@/lib/getCourseDetails";

const StartCourse = async (props) => {
  const data = await getCourseDetails(props?.params?.id);
  const lessons = data?.data?.attributes?.lesson;
  const Bannerlessons = data?.data?.attributes?.lesson[0];
  // console.log({ data, lesson: Bannerlessons.video });

  return (
    <section className="py-4 px-container md:px-0 pt-10 ">
      <BannerCourses data={Bannerlessons} />
      <div className="overflow-y-scroll no-scrollbar">
        <AllLessons data={lessons} />
      </div>
    </section>
  );
};

export default StartCourse;
