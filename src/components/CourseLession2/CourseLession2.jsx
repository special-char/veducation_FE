import Image from "next/image";
import React from "react";
import styles from "./CourseLession2.module.css";
import minipic from "public/thumbnail.png";

const CourseLession2 = () => {
  const details = [
    {
      img: minipic,
      p: "Lesson 01: Brahmacharya - The basics you need to understand",
      time: "9:45",
    },
    {
      img: minipic,
      p: "Lesson 01: Brahmacharya - The basics you need to understand",
      time: "9:45",
    },
  ];
  return (
    <div className={styles.CourseLession2}>
      {details.map((x, key) => (
        <div className={styles.CourseLession2__card} key="card">
          <div className="w-[100px] relative">
            <Image
              src={x.img}
              alt="thumbnail"
              className={styles.CourseLession2__img}
            />
          </div>
          <div className={styles.CourseLession2__right}>
            <p className={styles.CourseLession2__p}>{x.p}</p>
            <p className={styles.CourseLession2__span}>{x.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseLession2;
