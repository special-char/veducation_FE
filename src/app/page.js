"use client";
import ProductItem from "@/components/productItem";
import Coursecard from "@/components/Coursecard/coursecard";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="h-screen px-container">
      <SocialLinks />
      <ProductItem />
      <Coursecard />
    </div>
  );
}
