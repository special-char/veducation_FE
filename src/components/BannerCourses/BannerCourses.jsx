import React from "react";
import styles from "./BannerCourses.module.css";
import CourseLession from "public/courseLession.png";
import Image from "next/image";
import Vector from "public/Vector.svg";
import Link from "next/link";

const BannerCourses = ({ data }) => {
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
          src={data.thumbnail}
          alt={"CourseLession"}
          fill
          className={styles.BannerCourses__img}
        />

        <Link href={data.link}>
          <Vector className={styles.BannerCourses__vector} />
        </Link>
      </div>
      <div className={styles.BannerCourses__content}>
        <p className={styles.BannerCourses__title}>{data.title}</p>
        <p className={styles.BannerCourses__description}>{data.description}</p>
      </div>
    </div>
  );
};

export default BannerCourses;
