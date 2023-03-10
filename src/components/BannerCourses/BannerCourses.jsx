import React from "react";
import styles from "./BannerCourses.module.css";
import CourseLession from "public/courseLession.png";
import Image from "next/image";
import Vector from "public/Vector.svg";

const BannerCourses = () => {
  const details = {
    img: CourseLession,
    title: "Lesson 01: Brahmacharya - The basics you need to understand",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  };
  return (
    <div className={styles.BannerCourses}>
      <div className="relative aspect-h-image min-h-[217px]">
        <Image
          src={details.img}
          alt={"CourseLession"}
          fill
          className={styles.BannerCourses__img}
        />
        <Vector className={styles.BannerCourses__vector} />
      </div>
      <div className={styles.BannerCourses__content}>
        <p className={styles.BannerCourses__title}>{details.title}</p>
        <p className={styles.BannerCourses__description}>
          {details.description}
        </p>
      </div>
    </div>
  );
};

export default BannerCourses;
