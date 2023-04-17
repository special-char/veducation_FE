import AboutPage from "@/components/About/AboutPage";
import Button from "@/components/Button";
import { getAboutData } from "@/lib/getAboutData";
import Link from "next/link";
import React from "react";

const About = async () => {
  const aboutData = await getAboutData();
  console.log({
    aboutData: aboutData?.data?.attributes?.img?.data?.attributes?.url,
  });
  return (
    <section className="px-container pt-3">
      <AboutPage data={aboutData?.data} />
    </section>
  );
};

export default About;
