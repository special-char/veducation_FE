import Image from "next/image";
import React from "react";
import CardImage from "public/icons/image1.png";
import Reviews from "../Reviews";
import styles from "./card.module.css";
const carddata = [
  {
    id: 1,
    url: CardImage,
    title: "Brahmacharya",
    time: "4h 16mins",
    lessons: "12lessons",
    desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  ,
  {
    id: 2,
    url: CardImage,
    title: "Brahmacharya",
    time: "4h 16mins",
    lessons: "12lessons",
    desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    url: CardImage,
    title: "Brahmacharya",
    time: "4h 16mins",
    lessons: "12lessons",
    desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const Coursecard = () => {
  return (
    <section className="flex flex-col gap-3">
      {carddata.map((val, index) => {
        return (
          <div key={index} className={styles.cardRoot}>
            <>
              <div className={styles.cardRoot__image}>
                <Image src={CardImage} fill alt="" className="" />
              </div>
              <div className={styles.cardRoot__body}>
                <h5 className={styles.cardRoot__title}>{val.title}</h5>
                <Reviews className="text-xs text-white" count={24} />
                <span className="text-xs font-semibold text-white">
                  {val.time} | {val.lessons}
                </span>
                <br />
                <p className={styles.cardRoot__desc}>{val.desc}</p>
              </div>
            </>
          </div>
        );
      })}
    </section>
  );
};

export default Coursecard;
