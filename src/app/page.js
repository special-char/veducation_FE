"use client";
import ProductItem from "@/components/productItem";
import Coursecard from "@/components/Coursecard/coursecard";
import SocialLinks from "@/components/SocialLinks";
import SignIn from "@/containers/SignIn";

export default function Home() {
  function onClick() {}
  return (
    <div className="h-full">
      <SocialLinks onClick={onClick} />
      {/* <ProductItem />
      <Coursecard /> */}
      <SignIn />
    </div>
  );
}
