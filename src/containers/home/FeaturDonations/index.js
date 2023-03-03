import React from "react";
import Imag1 from "public/img1.png";
import DonationCard2 from "@/components/DonationCard";
import { getFeatureDonations } from "@/lib/getFeaturedDonation";

const FeatureDonations = async () => {
  const data = await getFeatureDonations();
  //console.log("getFeatureDonations data:", data);
  const donationData = data?.data?.attributes;
  //console.log("getFeatureDonations:", donationData);

  return (
    <div>
      <DonationCard2
        img={donationData?.thumbnail}
        title={donationData?.title}
        desc={donationData?.description}
        btnText={donationData?.btnText ?? "Donation"}
        btnLink={donationData?.btnLink ?? ""}
      />
    </div>
  );
};

export default FeatureDonations;
