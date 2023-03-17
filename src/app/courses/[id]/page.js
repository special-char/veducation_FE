import CourseDetails from "@/components/CourseDetails";
import { getUser } from "@/lib/getUser";
import Link from "next/link";
import React from "react";

const Page = async (props) => {
  const user = await getUser();
  return (
    <section className="">
      <CourseDetails users={user} {...props} />
    </section>
  );
};

export default Page;
