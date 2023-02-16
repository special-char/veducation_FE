import Image from "next/image";
import React from "react";
import styles from "./donationCard.module.css";
import Imag1 from "public/img1.png";

const DonationCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__first}>
        <div className={styles.main__header}>
          <h1 className={styles.main__heading}>Donations</h1>
          <a href="#View" className={styles.main__view} >
            View all
          </a>
        </div>
        <div className={styles.main__card}>
          <Image src={Imag1} alt="donation" className={styles.main__img} />
          <div className={styles.main__text}>
            <h2 className={styles.main__helpUsTxt}>Help us spread <br /> Dharma</h2>
            <p className={styles.main__discription}>
              Help us in this mission of spreading this ancient knowledge all
              over the world. So that we can again make
              <span className={styles.main__span}>'The Golden Bird'</span>
            </p>
            <button className={styles.main__button}>3 Ways you can help us..</button> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default DonationCard;
