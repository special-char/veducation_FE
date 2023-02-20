"use client";
import Coursecard from "@/components/Coursecard/coursecard";
import Navbar from "@/components/Navbar/navbar";
import ProductItem from "@/components/productItem";
import SocialLinks from "@/components/SocialLinks";
import Btnnavigator from "@/components/Buttonnavigator";
import SignIn from "@/containers/SignIn";
import Varification from "@/containers/otpVarification";
import Productlist from "@/components/productItem";
import Book from "public/book.png";
import DonationCard2 from "@/components/DonationCard";
import DonationCard from "@/components/DonationCard";
import CourseDetails from "@/components/CourseDetails";

const data = [
  {
    img: Book,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
    rate: 3,
    count: 20,
  },
  {
    img: Book,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
    rate: 3,
    count: 20,
  },
  {
    img: Book,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
    rate: 3,
    count: 20,
  },
  {
    img: Book,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
    rate: 3,
    count: 20,
  },
];

export default function Home() {
  function onClick() {}
  return (
    <div className="h-full pb-44">
      <SocialLinks />
      <div className="px-container">
        {/* <Productlist productList={data} /> */}
        <CourseDetails />
        <DonationCard />
        <DonationCard2 />
        <Coursecard />
        {/* <ProductItem /> */}
        <Navbar />
      </div>
    </div>
  );
}
