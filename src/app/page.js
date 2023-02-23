import SocialLinks from "@/components/SocialLinks";
import SignIn from "@/containers/SignIn";
import Productlist from "@/components/ProductList";
import Book from "public/book.png";
import OrderConfirm from "@/containers/orderConfirmation/orderConfirm";
import HomePage from "@/containers/home";

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

export default function Home(props) {
  // function onClick() {}
  return (
    <div className="h-full pb-44">
      <HomePage {...props} />
    </div>
  );
}
