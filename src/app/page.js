import SocialLinks from "@/components/SocialLinks";
import SignIn from "@/containers/SignIn";
import Productlist from "@/components/ProductList";
import Book from "public/book.png";
import DonationCard2 from "@/components/DonationCard";
import DonationCard from "@/components/DonationCard";
import { getProductData } from "@/lib/getHomeProductData";
import ProductTitle from "@/components/ProductTitle";
import YourOrderPage from "@/components/yourOrdersPage/yourOrderPage";
import ProductConfirm from "@/components/ProductConfirm/productConfirm";
import OrderConfirm from "@/containers/orderConfirmation/orderConfirm";

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
      <OrderConfirm />
      <div className="xs:px-container md:px-0">
        <Productlist id={1} />
        {/* <DonationCard /> */}
      </div>
    </div>
  );
}
