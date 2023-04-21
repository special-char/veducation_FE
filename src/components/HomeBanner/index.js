import Image from "next/image";
import React from "react";
import BannerImage from "public/icons/Bannerimage.png";
import Carousal from "../carousal";
import { getCourses } from "@/lib/getCourses";
import Link from "next/link";
import MyPdfViewer from "@/app/pdff";
import MyPdfViewer1 from "@/app/pdff";

const HomeBanner = async () => {
  const data = await getCourses();

  return (
    <div className="flex flex-col py-4 gap-2">
      <Carousal>
        {data?.data.map((val, index) => {
          const url = val?.attributes?.img?.data?.attributes?.url;
          const base = process.env.NEXT_PUBLIC_API_URL;
          const imgUrl = new URL(url, base).href;
          return (
            <Link key={index} href={`/courses/${val.id}`}>
              <div className="relative aspect-video">
                <Image
                  src={
                    // `${process.env.NEXT_PUBLIC_API_URL}${val?.attributes?.img?.data?.attributes?.url}` ??
                    imgUrl
                  }
                  fill
                  alt={val.attributes.alttext}
                />
              </div>
            </Link>
          );
        })}
      </Carousal>
      {/* <MyPdfViewer1/> */}
    </div>
  );
};

export default HomeBanner;
