// import Input from "@/components/InputComponent";
import Navbar from "@/components/Navbar/navbar";
import ProductItem from "@/components/productItem";
import Reviews from "@/components/Reviews";
import SocialLinks from "@/components/SocialLinks";
import Book from "public/book.png";

const data = [
  {
    src: Book,
    name: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
  },
  {
    src: Book,
    name: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
  },
  {
    src: Book,
    name: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
  },
  {
    src: Book,
    name: "B.O.S.S : Basics of Sanatan Sanskriti",
    author: "Prateeik Prajapati",
  },
];

export default function Home() {
  return (
    <section className="">
      <div className="h-screen ">
        <SocialLinks />

        <div className="flex overflow-x-scroll gap-1">
          {data.map((val) => {
            return (
              <ProductItem
                key={val.name}
                img={val.src}
                title={val.name}
                author={val.author}
                rate={4}
                count={21}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </section>
  );
}
