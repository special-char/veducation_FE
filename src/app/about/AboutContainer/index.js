import Button from "@/components/Button";
import { getAboutData } from "@/lib/getAboutData";
import Link from "next/link";
import React from "react";

const About = async () => {
  const aboutData = await getAboutData();
  console.log(aboutData, "aboutData");

  return (
    <div>
      <Button as={Link} href="#" className={"flex justify-center"}>
        Tell Me More
      </Button>
    </div>
  );
};

export default About;
