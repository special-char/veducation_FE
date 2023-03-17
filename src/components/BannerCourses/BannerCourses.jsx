"use client";
import React, { createRef, useEffect } from "react";
import styles from "./BannerCourses.module.css";
import CourseLession from "public/courseLession.png";
import VideoComponent from "../videocomponent";
import { useCourseVideoContext } from "@/context/CourseVideoContext";

const BannerCourses = ({ data }) => {
  // const [isPaused, setIsPaused] = useState(true);

  const { videoState, videoDispatch } = useCourseVideoContext();

  const videoRef = createRef();

  const {
    video: { link, title, description },
  } = videoState;
  console.log({ videoState });
  useEffect(() => {
    videoRef?.current?.load();
    return () => {};
  }, [link]);

  console.log(videoRef?.current?.duration);

  return (
    <div className={styles.BannerCourses}>
      <div className="relative">
        <VideoComponent
          ref={videoRef}
          loops
          poster={data?.thumbnail}
          controls
          controlsList="nodownload"
          muted
          className="w-full aspect-video"
          source={{
            src: link || data?.link,
            type: "video/mp4",
            controls: true,
          }}
          // onPause={() => {
          //   setIsPaused(true);
          // }}
        />
        {/* {isPaused && (
          <button
            onClick={() => {
              setIsPaused(false);
            }}
          >
            <Vector className={styles.BannerCourses__vector} />
          </button>
        )} */}
        {/* <>
            <Image
              src={data?.thumbnail}
              alt={"CourseLession"}
              fill
              className={styles.BannerCourses__img}
            />
            
          </> */}
      </div>
      <div className={styles.BannerCourses__content}>
        <p className={styles.BannerCourses__title}>{title || data?.title}</p>
        <p className={styles.BannerCourses__description}>
          {description || data?.description}
        </p>
      </div>
    </div>
  );
};

export default BannerCourses;
