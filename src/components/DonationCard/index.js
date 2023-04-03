import Link from "next/link";
import React from "react";
import Button from "../Button";
import styles from "./donation.module.css";
import Imag1 from "public/img1.png";
import Image from "next/image";
import ProductTitle from "../ProductTitle";

const DonationCard2 = ({ img, title, desc, btnText, btnLink }) => {
  return (
    <section className={styles.donationcard}>
      <ProductTitle isDonation title="Donations" link={"/donations"} />
      <div className={styles.donationcard__main}>
        <div className="relative aspect-square w-[139px] h-full">
          <Image src={img} fill className="" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-0 leading-[22px] text-xl">{title}</h3>
          <p className="text-xs font-medium pt-[7px] pb-[15px]">{desc}</p>
          <Button
            as={Link}
            variant="primary"
            href={btnLink}
            className="w-full text-sm leading-[13.7px] px-0 py-2"
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
