import Image from "next/image";
import React from "react";
import BannerImage from "public/icons/Bannerimage.png";
import Carousal from "../carousal";
import { getCourses } from "@/lib/getCourses";
import Link from "next/link";

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
    <div className="flex flex-col py-4 gap-2">
      <Carousal>
        {data?.data.map((val, index) => {
          return (
            <Link key={index} href={`/courses/${val.id}`}>
              <div className="relative aspect-video">
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
