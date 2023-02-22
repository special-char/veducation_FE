import React from "react";
import styles from "./AboutPage.module.css";
import Img from "public/AboutPageImg.png";
import Image from "next/image";

const details = {
  p1: "Learn about vedic science, history, philosophy & culture in details.With Prateeik Prajapati, who has been reading and researching collective psychologies of world civilisations since last 7 years.",
  p2: "Now he has decided to share all that invaluable knowledge with the world through his talks and sessions in schools, colleges, corporates, villages & online through Youtube & social media.",
  buttonname: "Tell Me More",
  img: ( <Image src={Img} alt="aboutpage" />)

};


const AboutPage = () => {
  return (
    <div className={styles.AboutPage}>
      <div className={styles.AboutPage__Img}>
        {details.img}
      </div>
      <div className={styles.AboutPage__Content}>
        <p className="pb-0 mb-0 text-secondary font-medium">Welcome to </p>
        <p className={styles.AboutPage__span}>Veducation World</p>
      </div>
      <div className={styles.AboutPage__details}>
        <p className={styles.AboutPage__details1}>{details.p1}</p>
        <p className={styles.AboutPage__details2}>{details.p2}</p>
      </div>
      <div className={styles.AboutPage__button}>
        {" "}
        <button className={styles.AboutPage__button1}>{details.buttonname}</button>
      </div>
    </div>
  );
};

export default AboutPage;
