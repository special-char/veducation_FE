"use client";
import Image from "next/image";
import React from "react";
import styles from "./AllLessons.module.css";
import clx from "classnames";

import { useCourseVideoContext } from "@/context/CourseVideoContext";

const AllLessons = ({ data }) => {
  const { videoState, videoDispatch } = useCourseVideoContext();

  const {
    video: { id = data[0]?.id, ...vid },
  } = videoState;

  return (
    <div className={styles.AllLessons}>
      {data?.map((val, key) => (
        <button
          className={clx(`w-full`, {
            "opacity-60": id === val?.id,
          })}
          onClick={() => {
            videoDispatch({ video: val, isPlaying: true });
          }}
          key={val.id}
        >
          <div className={styles.AllLessons__card}>
            <div className="aspect-video w-full h-full relative ">
              <Image
                src={`${val?.thumbnail?.data?.attributes?.url}`}
                fill
                alt="thumbnail"
                className={styles.AllLessons__img}
              />
            </div>
            <div className={styles.AllLessons__right}>
              <p className={styles.AllLessons__title}>{val.title}</p>
              {id === val?.id && (
                <p className={styles.AllLessons__title}>is playing</p>
              )}
              <p className={styles.AllLessons__span}>{val.time}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default AllLessons;
