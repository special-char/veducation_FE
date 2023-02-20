import Coursecard from "@/components/Coursecard/coursecard";
import Navbar from "@/components/Navbar/navbar";
import ProductItem from "@/components/ProductList";
import SocialLinks from "@/components/SocialLinks";
import Btnnavigator from "@/components/Buttonnavigator";
import SignIn from "@/containers/SignIn";
import Varification from "@/containers/otpVarification";
import Productlist from "@/components/ProductList";
import Book from "public/book.png";
import DonationCard2 from "@/components/DonationCard";
import DonationCard from "@/components/DonationCard";
import { getProductData } from "@/lib/getHomeProductData";
import ProductTitle from "@/components/ProductTitle";

const data = [
  {
    img: Book,
    id: 1,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
    rate: 3,
    count: 20,
  },
  {
    img: Book,
    id: 2,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
    rate: 3,
    count: 20,
  },
  {
    img: Book,
    id: 3,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
    rate: 3,
    count: 20,
  },
  {
    img: Book,
    id: 4,
    title: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
    rate: 3,
    count: 20,
  },
];

export default function Home() {
  // function onClick() {}
  return (
    <div className="h-full pb-44">
      <SocialLinks />
      <SignIn />
      <div className="px-container">
        <Productlist productList={data} />
        {/* <DonationCard /> */}
      </div>
    </div>
  );
}
