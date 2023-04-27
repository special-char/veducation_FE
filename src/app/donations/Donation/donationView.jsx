import Image from "next/image";
import React from "react";
import styles from "./donationView.module.css";
import Imag2 from "public/img2.png";
import Imag3 from "public/img3.png";
import Imag4 from "public/img4.png";
// import Day from "public/icons/days.svg";
import Clock from "public/Clock.svg";
import People from "public/icons/people.svg";
import Progress from "./progressBar";
import { getDonationsData } from "@/lib/getDonationsData";
import Button from "@/components/Button";
import Link from "next/link";

const users = [
  {
    img: Imag2,
    about: "Building Gaushala for Hundreds of Gaumatas in Mayapur, Kolkata",
    day: "50days",
    bakers: "24,000",
    donation: "50568",
    progress: "10",
  },
  {
    img: Imag3,
    about: "Building Gaushala for Hundreds  Gaushala gaushala",
    day: "10days",
    bakers: "32,000",
    donation: "50568",
    progress: "60",
  },
  {
    img: Imag4,
    about: "Building Gaushala for Hundreds  Gaushala gaushala",
    day: "84days",
    bakers: "1000",
    donation: "50568",
    progress: "90",
  },
];

const DonationView = async () => {
  const donations = await getDonationsData();
  const data = donations?.data;
  // console.log({
  //   dataDonation: data[0]?.attributes?.image?.data?.attributes?.url,
  // });
  return (
    <div className={styles.main} id="View">
      <h5 className="">Donations</h5>
      {data?.map((val, i) => {
        const progressValue = val.attributes?.raised
          ?.split("")
          ?.filter((x) => x !== ",")
          .join("");
        const progressMax = val.attributes.raisedOutOf
          .split("")
          ?.filter((x) => x !== ",")
          .join("");

        return (
          <div className={styles.main__donationInfo} key={val.id}>
            <div className={styles.main__donationdata}>
              <Image
                src={`${val?.attributes?.image?.data?.attributes?.url}`}
                className={styles.main__img}
                alt="donation"
                // fill
                width={100}
                height={200}
              />
              {/* {x.img} */}
              <h5 className={styles.main__about}>{val.attributes.title}</h5>
              <div className={styles.main__value}>
                <span className={styles.main__span}>
                  ${val.attributes.raised}
                </span>
                raised out of
                <span className="text-base">${val.attributes.raisedOutOf}</span>
              </div>

              {/* <p>Lorem ipsum dolor sit amet.</p> */}

              {/* {x.progress} */}
              {/* <Progress
              bgcolor="green"
              max={val.attributes.raised}
              value={val.attributes.raisedOutOf}
              height={5}
            ></Progress> */}
              <progress
                id="file"
                value={progressValue}
                max={progressMax}
                className="w-full"
              ></progress>

              <div className={styles.main__chip_container}>
                <button className={styles.main__chip}>
                  <Clock height={10} />
                  {val.attributes.daysRemaining} Days
                </button>
                <button className={styles.main__chip}>
                  <People height={10} />
                  {val.attributes.backers} bakers
                </button>
              </div>
            </div>
            <div className={styles.main__btns}>
              <Button
                href=""
                as={Link}
                variant={"secondary2"}
                className="w-full py-3 px-0 text-sm2 border border-[#F5D9B1]"
              >
                Share
              </Button>
              <Button
                href=""
                as={Link}
                variant={"primary"}
                className="w-full py-3 px-0 text-sm2"
              >
                Donate Now
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DonationView;
