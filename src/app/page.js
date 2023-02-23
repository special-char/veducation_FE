import SocialLinks from "@/components/SocialLinks";
import SignIn from "@/containers/SignIn";
import Productlist from "@/components/ProductList";
import Book from "public/book.png";
import OrderConfirm from "@/containers/orderConfirmation/orderConfirm";
import { getGoogleSignInRequest } from "@/lib/getGoogleSignInRequest";

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

export default async function Home(props) {
  const token = `${new URLSearchParams(props?.searchParams).toString()}`;
  // const token = props?.searchParams;
  if (token) {
    console.log({ token });
    const response = await getGoogleSignInRequest(token);
    // console.log({ response });
  }

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
