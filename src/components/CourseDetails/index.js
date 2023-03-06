import React from "react";
import Accordian from "../Accordian";
import Image from "next/image";
import VideoPic from "../../../public/icons/videopic.png";
import PlayIcon from "../../../public/icons/playicon.svg";
import Reviews from "../Reviews";
import { Space_Mono } from "@next/font/google";
import Button from "../Button";
import Link from "next/link";
import styles from "../coursedetails/coursedetails.module.css";
import { getCourseDetails } from "@/lib/getCourseDetails";
import SwitchSection from "./SwitchSection";

const data1 = [
  {
    id: 1,
    title: "What will i learn from this course ?",
    description: "this is description",
  },
  {
    id: 2,
    title: "What will i learn from this course ?",
    description: "this is description",
  },
  {
    id: 3,
    title: "What will i learn from this course ?",
    description: "this is description",
  },
  {
    id: 4,
    title: "What will i learn from this course ?",
    description: "this is description",
  },
];

const reviewdata = [
  {
    id: 1,
    rate: 4,
    count: 34,
    reviewer: "Aayush S",
    date: "july 23th 2024",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 1,
    rate: 4,
    count: 34,
    reviewer: "Aayush S",
    date: "july 23th 2024",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const data = {
  time: "4h 30min",
  lesson: "12 lessons",
};

const prize = {
  rate: "$ 25.00",
};
const rating = {
  number: "4.7",
};

const CourseDetails = async (props) => {
  console.log("props:", props?.params?.id);

  const data = await getCourseDetails(props?.params?.id);
  console.log("getCourseDetails:", data);
  return (
    <section id="CourseDetails" className={styles.coursedetails}>
      <div className={styles.coursedetails__imagebody}>
        <Image
          src={data?.data?.attributes?.img}
          alt={"videoprofile image"}
          fill
        />
        <PlayIcon className={styles.coursedetails__playicon} />
      </div>
      <div className={styles.coursedetails__datails}>
        <h3 className="mb-0">{data?.data?.attributes?.title}</h3>
        <Reviews
          className=""
          slug={"course"}
          id={props?.params?.id}
          rate={3}
          count={23}
          disabled={false}
          width={20}
          height={20}
        />
        <span className="font-bold">
          {data?.data?.attributes?.duration} | {data?.data?.attributes?.lessons}
        </span>
        <div className={styles.coursedetails__prize}>
          {new Intl.NumberFormat("en-US", {
            currency: "USD",
            style: "currency",
          }).format(data?.data?.attributes?.price)}
        </div>
      </div>
      <SwitchSection
        data={data}
        id={props?.params?.id}
        reviewData={reviewdata}
      />
      <Button
        as={Link}
        href="/cart?course"
        prefetch={false}
        variant={"primary"}
        size={"small"}
        className="w-full"
      >
        Enroll Now
      </Button>
      {/* <video className="aspect-square min-h-[100px] w-full mr-0" controls>
          <source
            src="https://www.youtube.com/watch?v=Cn-dT20uHRg&ab_channel=TajAgroProducts"
            type="video/mp4"
          />
          <source
            src="https://www.youtube.com/watch?v=Cn-dT20uHRg&ab_channel=TajAgroProducts"
            type="video/ogg"
          />
          Your browser does not support HTML video.
        </video> */}
    </section>
  );
};

export default CourseDetails;
