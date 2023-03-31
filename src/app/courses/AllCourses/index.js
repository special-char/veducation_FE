import Coursecard from "@/components/Coursecard/coursecard";
import CourseImage from "public/courseImg.png";
import CourseImage2 from "public/courseImg2.png";
import React from "react";
import { getCourses } from "@/lib/getCourses";
import Link from "next/link";
import { getUser } from "@/lib/getUser";
import { headers } from "next/headers";
import { getSessionUser } from "@/app/orderconfirmed/page";

// const data = [
//   {
//     id: 1,
//     img: CourseImage,
//     coursetitle: "Brahmacharya",
//     duration: "4h 44min",
//     lessons: "12 lessons",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
//     rate: 4,
//     count: 21,
//   },
//   {
//     id: 2,
//     img: CourseImage2,
//     coursetitle: "Brahmacharya",
//     duration: "4h 44min",
//     lessons: "12 lessons",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
//     rate: 4,
//     count: 21,
//   },
//   {
//     id: 3,
//     img: CourseImage,
//     coursetitle: "Brahmacharya",
//     duration: "4h 45min",
//     lessons: "12 lessons",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
//     rate: 4,
//     count: 21,
//   },
//   {
//     id: 4,
//     img: CourseImage2,
//     coursetitle: "Brahmacharya",
//     duration: "4h 44min",
//     lessons: "12 lessons",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
//     rate: 4,
//     count: 21,
//   },
//   {
//     id: 5,
//     img: CourseImage,
//     coursetitle: "Brahmacharya",
//     duration: "4h 44min",
//     lessons: "12 lessons",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
//     rate: 4,
//     count: 21,
//   },
// ];

const AllCourses = async () => {
  const productCourses = await getCourses();
  const session = await getSessionUser(headers().get("cookie") ?? "");
  const users = await getUser();
  const user = users?.find((item) => item?.email === session?.user?.email);
  // console.log("AllCourses users:", users);
  return (
    <section className="">
      <div className="grid md:grid-cols-2 gap-3">
        {productCourses?.data?.length > 0 ? (
          productCourses?.data.map((val) => {
            return <Coursecard users={user} key={val.id} {...val} />;
          })
        ) : (
          <div className="h-[79vh] w-full flex items-center justify-center">
            <span className="bg-primary text-white font-semibold text-sm text-center px-10 py-2 rounded-md">
              No Courses available
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCourses;
