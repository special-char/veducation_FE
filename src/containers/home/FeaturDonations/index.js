import React from "react";
import Imag1 from "public/img1.png";
import DonationCard2 from "@/components/DonationCard";
import { getFeatureDonations } from "@/lib/getFeaturedDonation";

const FeatureDonations = async () => {
  const data = await getFeatureDonations();
  const donationData = data?.data?.attributes?.donation?.data?.attributes;

  return (
    <div>
      <DonationCard2
        img={donationData?.image}
        title={donationData?.title}
        desc={donationData?.description}
        btnText={donationData?.btnText ?? "Donation"}
        btnLink={donationData?.btnLink ?? ""}
      />
    </div>
  );
};

export default FeatureDonations;
