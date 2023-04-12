import React from "react";
import Imag1 from "public/img1.png";
import DonationCard2 from "@/components/DonationCard";
import { getFeatureDonations } from "@/lib/getFeaturedDonation";
import { baseUrl } from "@/utils/constants";

const FeatureDonations = async () => {
  const data = await getFeatureDonations();
  const donationData = data?.data?.attributes;
  const url = donationData?.thumbnail?.data?.attributes?.url;
  const imageUrl = new URL(url, baseUrl).href;

  return (
    <div>
      <DonationCard2
        img={imageUrl}
        title={donationData?.title}
        desc={donationData?.description}
        btnText={donationData?.btnText ?? "Donation"}
        btnLink={donationData?.btnLink ?? ""}
      />
    </div>
  );
};

export default FeatureDonations;
