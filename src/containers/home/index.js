import CartPage from "@/app/cartpage/cartPage";
import CourseDetails from "@/components/CourseDetails";
import DonationCard2 from "@/components/DonationCard";
import Productlist from "@/components/ProductList";
import SocialLinks from "@/components/SocialLinks";
import SocialIcon from "@/components/SocialLinks/SocialIcon";

import React from "react";
import FeatureDonations from "./FeaturDonations";

const HomePage = () => {
  return (
    <section>
      <SocialLinks />
      <Productlist id={1} />
      <FeatureDonations />
    </section>
  );
};

export default HomePage;
