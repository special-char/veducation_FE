import Link from "next/link";
import React from "react";
import Button from "../Button";
import styles from "./donationcard.module.css";
import Imag1 from "public/book.png";
import Image from "next/image";

const DonationCard = () => {
  return (
    <section className={styles.donationcard}>
      <div className="flex justify-between items-center py-4">
        <h5 className="mb-0">Donations</h5>
        <Link href="" className="border-b-1">
          View All
        </Link>
      </div>
      <div className={styles.donationcard__main}>
        <div className="relative aspect-square h-full w-full">
          <Image src={Imag1} fill alt="donation image" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-bold mb-0 ">Help us spread Dharma</h3>
          <p className="text-xs">
            Help us in this mission of spreading this ancient knowledge all over
            the world. So that we can again make India,'The Golden Bird'
          </p>
          <Button
            as={Link}
            variant="primary"
            href=""
            className="w-full px-0 py-2"
            size={"small"}
          >
            3 Ways you can help us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationCard;
