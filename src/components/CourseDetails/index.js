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
          notDisabled={true}
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
      <div className="py-4">
        <div className={styles.coursedetails__imformation}>
          <div className=" flex flex-col">
            <h5>Description</h5>
            <div className={styles.coursedetails__underline}></div>
          </div>
          <p className={styles.coursedetails__review}>Reviews</p>
        </div>
        <p className="text-base">{data?.data?.attributes?.description}</p>
      </div>
      <div className={styles.coursedetails__faqpage}>
        <h5 className={styles.coursedetails__faqheader}>Topics Covered</h5>
        <Accordian data={data?.data?.attributes?.lesson} />
      </div>
      <div className={styles.coursedetails__rateing}>
        <div className={styles.coursedetails__star}>{rating.number}</div>
        <Reviews
          slug={"course"}
          id={props?.params?.id}
          count={24}
          rate={4}
          width={22}
          height={22}
        />
      </div>
      <div className={styles.coursedetails__reviewinfo}>
        <h5 className="font-bold">Top Reviews</h5>
        <p className={styles.coursedetails__viewall}>View All</p>
      </div>

      <div className={styles.coursedetails__reviewpage}>
        {reviewdata.map((val) => {
          return (
            <>
              <div key={val.id} className={styles.coursedetails__commentpage}>
                <div className={styles.coursedetails__ratingstar}>
                  <Reviews
                    count={val.count}
                    rate={val.rate}
                    width={18}
                    height={18}
                  />
                  <p className={styles.coursedetails__reviewerdate}>
                    {`By ${val.reviewer} - ${val.date}`}
                  </p>
                </div>
                <p className="text-base">{val.desc}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.coursedetails__faqpage}>
        <h5 className={styles.coursedetails__faqheader}>
          Frequently Asked Questions
        </h5>
        <Accordian data={data?.data?.attributes?.faq} />
        {/* <Accordian data={data1} /> */}
      </div>
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
