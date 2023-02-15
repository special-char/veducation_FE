import DonationCard from "@/components/DonationCard";
import ProductList from "@/components/ProductItem";
import ProductItem from "@/components/ProductItem";
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
    <div>
      <SocialLinks />
      <ProductList data={data} />
      <DonationCard />
    </div>
  );
}
