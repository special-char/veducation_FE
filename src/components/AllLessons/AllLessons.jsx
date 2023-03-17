import Image from "next/image";
import React from "react";
import styles from "./AllLessons.module.css";
import coursesImg from "public/thumbnail.png";
import Link from "next/link";

const AllLessons = ({ data }) => {
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
  console.log("AllLessons page:", data);
  return (
    <div className={styles.AllLessons}>
      {data.map((val, key) => (
        <Link href={val.link} key={val.id}>
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
        </Link>
      ))}
    </div>
  );
};

export default AllLessons;
