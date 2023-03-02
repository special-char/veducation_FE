import React from "react";
import styles from "./AboutPage.module.css";
import Img from "public/AboutPageImg.png";
import Image from "next/image";
import Button from "../Button";

const details = {
  p1: "Learn about vedic science, history, philosophy & culture in details.With Prateeik Prajapati, who has been reading and researching collective psychologies of world civilisations since last 7 years.",
  p2: "Now he has decided to share all that invaluable knowledge with the world through his talks and sessions in schools, colleges, corporates, villages & online through Youtube & social media.",
  buttonname: "Tell Me More",
  img: Img,
};

const AboutPage = ({ data }) => {
  console.log("AboutPage data:", data);
  return (
    <div className={styles.AboutPage}>
      <div className={styles.AboutPage__Img}>
        <Image src={details.img} alt="aboutpage" className="w-full" />
        <div className={styles.AboutPage__Content}>
          <p className="pb-0 mb-0 text-secondary font-medium">
            {data.attributes.title}
          </p>
        </div>
      </div>
      <div className={styles.AboutPage__details}>
        <p className={styles.AboutPage__details1}>
          {data.attributes.description}
        </p>

        <div className={styles.AboutPage__button}>
          <Button
            variant="primary"
            size="large"
            as={"tell"}
            href=""
            className={"text-[15px] w-full"}
          >
            Tell Me More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
