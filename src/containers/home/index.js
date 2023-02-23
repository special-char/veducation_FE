import DonationCard2 from "@/components/DonationCard";
import Productlist from "@/components/ProductList";
import SocialLinks from "@/components/SocialLinks";
import SocialIcon from "@/components/SocialLinks/SocialIcon";
import Imag1 from "public/img1.png";
import React from "react";

const HomePage = async (props) => {
  const token = `${new URLSearchParams(props?.searchParams).toString()}`;
  // const token = props?.searchParams;
  if (token) {
    console.log({ token });
    const response = await getGoogleSignInRequest(token);
    // console.log({ response });
  }
  return (
    <section>
      <SocialLinks />
      <Productlist id={1} />
      <DonationCard2
        img={Imag1}
        title="Help us spread Dharma"
        desc="Help us in this mission of spreading this ancient knowledge
            all over the world. So that we can again make India,'The Golden
            Bird'"
        btnText="3 Ways you can help us"
      />
    </section>
  );
};

export default HomePage;
