import React from "react";
import styles from "./BannerCourses.module.css";
import CourseLession from "public/courseLession.png";
import Image from "next/image";
import Vector from "public/Vector.svg";

const BannerCourses = () => {
  const details = {
    img: CourseLession,
    p: "Lesson 01: Brahmacharya - The basics you need to understand",
    span: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  };
  return (
    <div className={styles.BannerCourses}>
      <div className={styles.BannerCourses__thumbnail}>
        <Image
          src={details.img}
          alt={"CourseLession"}
          className={styles.BannerCourses__img}
        />
        <Vector className={styles.BannerCourses__vector} />
      </div>
      <div className={styles.BannerCourses__content}>
        <p className={styles.BannerCourses__p}>{details.p}</p>
        <p className={styles.BannerCourses__span}>{details.span}</p>
      </div>
    </div>
  );
};

export default BannerCourses;
