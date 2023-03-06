"use client";
import React, { useState } from "react";
import Description from "./Description";
import ReviewSection from "./ReviewSection";
import styles from "../coursedetails.module.css";
import clx from "classnames";

const SwitchSection = ({ data, id, reviewData }) => {
  const [switchedTo, setSwitchedTo] = useState("desc");
  return (
    <div>
      <div className="py-4">
        <div className={styles.coursedetails__imformation}>
          <div className=" flex flex-col">
            <h5
              onClick={() => {
                setSwitchedTo("desc");
              }}
            >
              Description
            </h5>
            <div className={styles.coursedetails__underline}></div>
          </div>
          <h5
            onClick={() => {
              setSwitchedTo("review");
            }}
            className={clx(styles.coursedetails__review, {
              "font-bold": switchedTo === "review",
            })}
          >
            Reviews
          </h5>
        </div>
        <p className="text-base">{data?.data?.attributes?.description}</p>
      </div>
      {switchedTo === "desc" ? (
        <Description data={data} id={id} reviewData={reviewData} />
      ) : (
        <ReviewSection />
      )}
    </div>
  );
};

export default SwitchSection;
