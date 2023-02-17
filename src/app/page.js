"use client";
import Coursecard from "@/components/Coursecard/coursecard";
import Navbar from "@/components/Navbar/navbar";
import ProductItem from "@/components/productItem";
import SocialLinks from "@/components/SocialLinks";
import Btnnavigator from "@/components/Buttonnavigator";
import SignIn from "@/containers/SignIn";
import Varification from "@/containers/otpVarification";

export default function Home() {
  function onClick() {}
  return (
    <div className="h-screen ">
      <Varification />
    </div>
  );
}
