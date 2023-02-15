import React from "react";
import Carousal from "@/components/Banner";
import Image from "next/image";

const Bannerindex = () => {
  return (
    <div>
      <Carousal>
        {[1, 2, 3]?.map((course) => {
          <>
            <Image src={BannerImage} height={300} width={300} />
            <Image src={BannerImage} height={300} width={300} />
            <Image src={BannerImage} height={300} width={300} />
          </>;
        })}
      </Carousal>
    </div>
  );
};

export default Bannerindex;
