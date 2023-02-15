// import Input from "@/components/InputComponent";
import Navbar from "@/components/Navbar/navbar";
import ProductItem from "@/components/productItem";
import Reviews from "@/components/Reviews";
import SocialLinks from "@/components/SocialLinks";

const data = {
  src: Book,
  name: "B.O.S.S : Basics of Sanatan Sanskriti",
  author: "Prateeik Prajapati",
};

export default function Home() {
  return (
    <section>
      <div className="h-screen">ProductItem</div>
      <Navbar />
    </section>
  );
}
