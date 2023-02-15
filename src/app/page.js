// import Input from "@/components/InputComponent";
import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import Book from "public/book.png";
import Reviews from "@/components/Reviews";
import SocialLinks from "@/components/SocialLinks";

const data = {
  src: Book,
  name: "B.O.S.S : Basics of Sanatan Sanskriti",
  author: "Prateeik Prajapati",
};

export default function Home() {
  return (
    <div>
      <div className="">
        <ProductItem
          img={Book}
          title={"Next js"}
          author={"Harsh"}
          rate={4}
          count={21}
        />
      </div>
    </div>
  );
}
