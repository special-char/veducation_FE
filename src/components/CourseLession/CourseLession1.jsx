import React from "react";
import styles from "./CourseLession.module.css";
import CourseLession from "public/courseLession.png";
import Image from "next/image";
import Vector from "public/Vector.svg";

const CourseLession1 = () => {
  const details = {
    img: CourseLession,
    p: "Lesson 01: Brahmacharya - The basics you need to understand",
    span: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  };
  return (
    <div className={styles.CourseLession1}>
      <div className={styles.CourseLession1__thumbnail}>
        <Image
          src={details.img}
          alt={"CourseLession"}
          className={styles.CourseLession1__img}
        />
        <Vector className={styles.CourseLession1__vector} />
      </div>
      <div className={styles.CourseLession1__content}>
        <p className={styles.CourseLession1__p}>{details.p}</p>
        <p className={styles.CourseLession1__span}>{details.span}</p>
      </div>
    </div>
  );
};

export default CourseLession1;
