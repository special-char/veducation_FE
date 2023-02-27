import Link from "next/link";
import React from "react";
import Button from "../Button";
import styles from "./donation.module.css";
import Imag1 from "public/img1.png";
import Image from "next/image";

const DonationCard2 = ({ img, title, desc, btnText, btnLink }) => {
  return (
    <section className={styles.donationcard}>
      <div className="flex justify-between p-2">
        <h5>Donations</h5> <a href="/donations">View all</a>
      </div>
      <div className={styles.donationcard__main}>
        <div className="relative aspect-square h-full w-full">
          <Image src={img} fill className="" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-bold mb-0 ">{title}</h3>
          <p className="text-xs">{desc}</p>
          <Button
            as={Link}
            variant="primary"
            href={btnLink}
            className="w-full px-0 py-2"
            size={"small"}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationCard2;
