import Image from "next/image";
import React from "react";
import BannerImage from "public/icons/Bannerimage.png";
import Carousal from "../carousal";
import { getCourses } from "@/lib/getCourses";
import Link from "next/link";
import styles from "./homebanner.module.css";

// const data = [
//   {
//     id: 1,
//     image: BannerImage,
//   },
//   {
//     id: 2,
//     image: BannerImage,
//   },
//   {
//     id: 3,
//     image: BannerImage,
//   },
//   {
//     id: 4,
//     image: BannerImage,
//   },
// ];

const HomeBanner = async () => {
  const data = await getCourses();
  return (
    <div className={styles.homebanner}>
      <Carousal>
        {data?.data.map((val, index) => {
          return (
            <Link key={index} href={`/courses/${val.id}`}>
              <div className={styles.homebanner__img}>
                <Image
                  src={val.attributes.img}
                  fill
                  alt={val.attributes.alttext}
                />
              </div>
            </Link>
          );
        })}
      </Carousal>
    </div>
  );
};

export default HomeBanner;
