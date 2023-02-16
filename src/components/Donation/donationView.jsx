import Image from "next/image";
import React from "react";
import styles from "./donationView.module.css";
import Imag2 from "public/img2.png";
import Imag3 from "public/img3.png";
import Imag4 from "public/img4.png";
import Day from "public/icons/days.svg";
import People from "public/icons/people.svg";
import Progress from "./progressBar";

const users = [
  {
    img: <Image src={Imag2} alt="donation" className={styles.main__img} />,
    about: "Building Gaushala for Hundreds of Gaumatas in Mayapur, Kolkata",
    day: "50days",
    bakers: "24000",
    donation: "50568",
    progress: <Progress bgcolor="green" progress="10" height={5} />,
  },
  {
    img: <Image src={Imag3} alt="donation" className={styles.main__img} />,
    about: "Building Gaushala for Hundreds  Gaushala gaushala",
    day: "10days",
    bakers: "32000",
    donation: "50568",
    progress: <Progress bgcolor="green" progress="60" height={5} />,
  },
  {
    img: <Image src={Imag4} alt="donation" className={styles.main__img} />,
    about: "Building Gaushala for Hundreds  Gaushala gaushala",
    day: "84days",
    bakers: "1000",
    donation: "50568",
    progress: <Progress bgcolor="green" progress="80" height={5} />,
  },
];

const DonationView = () => {
  return (
    <div className={styles.main} id="View">
      <div className={styles.main__header}>
        <h1 className={styles.main__heading}>Donations</h1>
      </div>

      {users.map((x, i) => (
        <div className={styles.main__donationInfo} key={i}>
          <div className={styles.main__donationdata}>
            {/* <Image src={Imag2} className={styles.main__img}/> */}
            {x.img}
            <h6 className={styles.main__about}>{x.about}</h6>
            <p className={styles.main__value}>
              <span className={styles.main__span}>${x.donation}</span> raised
              out of $300,000
            </p>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}

            {x.progress}

            <div className={styles.main__infoBtn}>
              <button className={styles.main__day}>
                <Day height={10} />
                {x.day}
              </button>
              <button className={styles.main__person}>
                <People height={10} />
                {x.bakers}
              </button>
            </div>
          </div>
          <div className={styles.main__btns}>
            <button className={styles.main__Share}>Share</button>
            <button className={styles.main__Donate}>Donate Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonationView;
