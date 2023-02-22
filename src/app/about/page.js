import AboutPage from "@/app/about/About/AboutPage";
import Button from "@/components/Button";
import { getAboutData } from "@/lib/getAboutData";
import Link from "next/link";
import React from "react";

const About = async () => {
  const aboutData = await getAboutData();
  console.log(aboutData, "aboutData");

  return (
    <section className="px-container pt-4 pb-24">
      <AboutPage />
    </section>
  );
};

export default About;
