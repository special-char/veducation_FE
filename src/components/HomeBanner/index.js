import Image from "next/image";
import React from "react";
import BannerImage from "public/icons/Bannerimage.png";
import Carousal from "../carousal";

const data = [
  {
    id: 1,
    image: BannerImage,
  },
  {
    id: 2,
    image: BannerImage,
  },
  {
    id: 3,
    image: BannerImage,
  },
  {
    id: 4,
    image: BannerImage,
  },
];

const HomeBanner = () => {
  return (
    <div className="flex flex-col py-4 gap-2">
      <Carousal>
        {data.map((val) => {
          return (
            <div key={val.id} className="relative aspect-video">
              <Image src={val.image} fill alt="Bannerimage" />
            </div>
          );
        })}
      </Carousal>
    </div>
  );
};

export default HomeBanner;
