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
    video: { title, description, ...vid },
  } = videoState;
  const { video } = vid;
  // video?.data?.attributes?.url
  // console.log(data?.video?.data?.attributes?.url, "KnokKonok");
  useEffect(() => {
    videoRef?.current?.load();
    return () => {};
  }, [video?.data?.attributes?.url]);

  // console.log(videoRef?.current?.duration);

  return (
    <div className={styles.BannerCourses}>
      <div className="relative">
        <VideoComponent
          ref={videoRef}
          loops
          poster={data?.thumbnail?.data?.attributes?.url}
          controls
          controlsList="nodownload"
          muted
          className="w-full aspect-video"
          source={{
            src:
              data?.video?.data?.attributes?.url ??
              video?.data?.attributes?.url,
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
