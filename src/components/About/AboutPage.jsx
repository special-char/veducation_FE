import React from "react";
import styles from "./AboutPage.module.css";
import Img from "public/AboutPageImg.png";
import Image from "next/image";
import Button from "../Button";
import md from "markdown-it";

// const details = {
//   p1: "Learn about vedic science, history, philosophy & culture in details.With Prateeik Prajapati, who has been reading and researching collective psychologies of world civilisations since last 7 years.",
//   p2: "Now he has decided to share all that invaluable knowledge with the world through his talks and sessions in schools, colleges, corporates, villages & online through Youtube & social media.",
//   buttonname: "Tell Me More",
//   img: Img,
// };

const AboutPage = ({ data }) => {
  console.log("AboutPage data:", data);
  return (
    <div className={styles.AboutPage}>
      <div className={styles.AboutPage__Img}>
        <div className="relative aspect-square min-h-[200px] object-contain">
          <Image
            src={data.attributes.img}
            alt="aboutpage"
            fill
            className="object-cover"
          />
        </div>
        <div className={styles.AboutPage__Content}>
          <p className="large text-secondary leading-[32.5px]">
            {data.attributes.greet}
          </p>
          <p className="large pb-0 mb-0 text-primary2  font-bold leading-[32.5px] w-[236px]">
            {data.attributes.title}
          </p>
        </div>
      </div>
      <div className="">
        {/* <p className="">{data.attributes.desc}</p> */}
        <div
          className="text-base leading-6"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{
            __html: md().render(data.attributes.desc ?? ""),
          }}
        ></div>
        <div className={styles.AboutPage__button}>
          <Button
            variant="primary"
            size="large"
            as={"tell"}
            href=""
            className={"text-base w-full"}
          >
            Tell Me More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
