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
import RatingComponent from "../RatingComponent";
import { getRating } from "@/lib/getRatings";

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

const CourseDetails = async (props) => {
  console.log("props:", props?.params?.id);

  const data = await getCourseDetails(props?.params?.id);
  const ratingId = data?.data?.attributes?.ratings?.data[0]?.id;
  const rating = await getRating(ratingId);
  console.log("getCourseDetails:", data?.data?.attributes?.ratings, {
    rating,
  });
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
        <h3 className="mb-0 text-xxl leading-[27.3px]">
          {data?.data?.attributes?.title}
        </h3>
        <RatingComponent
          // className=""
          slug={"course"}
          id={props?.params?.id}
          rate={rating?.data?.attributes?.rating}
          count={23}
          ratingId={ratingId}
          width={20}
          height={20}
        />
        <span className="font-bold pt-3 text-sm2">
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
        className="w-full text-base"
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
