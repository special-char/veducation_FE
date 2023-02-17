"use client";
import ProductItem from "@/components/productItem";
import Coursecard from "@/components/Coursecard/coursecard";
import SocialLinks from "@/components/SocialLinks";
import Btnnavigator from "@/components/Buttonnavigator";

export default function Home() {
  function onClick() {}
  return (
    <div className="h-full">
      {/* <SocialLinks />
      <ProductItem />
      <Coursecard /> */}
      <Btnnavigator />
    </div>
  );
}
