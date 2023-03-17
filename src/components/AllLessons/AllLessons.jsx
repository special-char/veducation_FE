"use client";
import Image from "next/image";
import React from "react";
import styles from "./AllLessons.module.css";

import { useCourseVideoContext } from "@/context/CourseVideoContext";

const AllLessons = ({ data }) => {
  const { videoDispatch } = useCourseVideoContext();

  console.log("AllLessons page:", data);
  return (
    <div className={styles.AllLessons}>
      {data?.map((val, key) => (
        <button
          className=" w-full"
          onClick={() => {
            videoDispatch({ videoUrl: val?.link });
          }}
          key={val.id}
        >
          <div className={styles.AllLessons__card}>
            <div className="aspect-video w-full h-full relative ">
              <Image
                src={val.thumbnail}
                fill
                alt="thumbnail"
                className={styles.AllLessons__img}
              />
            </div>
            <div className={styles.AllLessons__right}>
              <p className={styles.AllLessons__title}>{val.title}</p>
              <p className={styles.AllLessons__span}>{val.time}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default AllLessons;
