import Link from "next/link";
import React from "react";
import FeaturedBookImg from "public/featuredBook.png";
import Image from "next/image";
import Button from "@/components/Button";
import styles from "./featuredbook.module.css";
import Reviews from "@/components/Reviews";

const FeaturedBook = () => {
  return (
    <section className={styles.donationcard}>
      <div className={styles.donationcard__main}>
        <div className="relative aspect-image h-full w-full">
          <Image src={FeaturedBookImg} fill className="" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-bold mb-0 ">Basics of Sanatan Sanskriti</h3>
          <p className="text-xs">
            A Book with the knowledge that all the Sanatani Hindu must know,
            realise and apply in their lives. Get it now in...
          </p>
          <Reviews rate={4} count={22} width={22} height={22} />
          <div className="flex gap-3 py-2">
            <Button
              as={Link}
              variant="primary"
              href="#"
              className="w-full px-0 py-2"
              size={"small"}
            >
              English
            </Button>
            <Button
              as={Link}
              variant="primary"
              href="#"
              className="w-full px-0 py-2"
              size={"small"}
            >
              English
            </Button>
          </div>
          <a
            className="text-sm"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8XDRWXYeTcDfdZmiVlt8_9yPCs4Q_5V2LuYsn_SlKhpA2Yg/viewform"
          >
            or Buy Directly from Veducation (No Shipping Charges)
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
