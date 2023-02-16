"use client";
import Navbar from "@/components/Navbar/navbar";
import ProductItem from "@/components/productItem";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="h-screen px-container">
      <SocialLinks />
      <ProductItem />
    </div>
  );
}
