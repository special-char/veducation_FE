import React from "react";
import Imag1 from "public/img1.png";
import DonationCard2 from "@/components/DonationCard";
import { getFeatureDonations } from "@/lib/getFeaturedDonation";

const FeatureDonations = async () => {
  const data = await getFeatureDonations();
  //console.log("FeatureDonations data:", data.data.attributes);
  return (
    <div>
      <DonationCard2
        img={data.data.attributes?.bannerImg}
        title={data.data.attributes?.title}
        desc={data.data.attributes?.description}
        btnText={data.data.attributes?.btnText}
        btnLink={data.data.attributes?.btnLink}
      />
    </div>
  );
};

export default FeatureDonations;
