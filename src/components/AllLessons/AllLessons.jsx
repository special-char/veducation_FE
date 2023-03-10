import Image from "next/image";
import React from "react";
import styles from "./AllLessons.module.css";
import coursesImg from "public/thumbnail.png";

const AllLessons = () => {
  const details = [
    {
      img: coursesImg,
      title: "Lesson 01: Brahmacharya - The basics you need to understand",
      time: "9:45",
    },
    {
      img: coursesImg,
      title: "Lesson 01: Brahmacharya - The basics you need to understand",
      time: "9:45",
    },
    {
      img: coursesImg,
      title: "Lesson 01: Brahmacharya - The basics you need to understand",
      time: "9:45",
    },
    {
      img: coursesImg,
      title: "Lesson 01: Brahmacharya - The basics you need to understand",
      time: "9:45",
    },
    {
      img: coursesImg,
      title: "Lesson 01: Brahmacharya - The basics you need to understand",
      time: "9:45",
    },
  ];
  return (
    <div className={styles.AllLessons}>
      {details.map((x, key) => (
        <div className={styles.AllLessons__card} key="card">
          <div className="aspect-video w-full h-full relative ">
            <Image
              src={x.img}
              fill
              alt="thumbnail"
              className={styles.AllLessons__img}
            />
          </div>
          <div className={styles.AllLessons__right}>
            <p className={styles.AllLessons__title}>{x.title}</p>
            <p className={styles.AllLessons__span}>{x.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllLessons;
