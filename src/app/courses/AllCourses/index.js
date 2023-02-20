import Coursecard from "@/components/Coursecard/coursecard";
import CourseImage from "public/courseImg.png";
import CourseImage2 from "public/courseImg2.png";
import React from "react";
import {  getCourses } from "@/lib/getCourses";


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

const AllCourses = async() => {
  const productCourses = await getCourses();
  console.log(productCourses);
  


  return (
    <section className="pb-24">
      <div className="flex flex-col gap-3">
        {productCourses?.data.map((val) => {
          
          return (
            <Coursecard
            key={val.id}
             {...val}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllCourses;
