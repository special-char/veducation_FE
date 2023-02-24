"use client";
import ProductItem from "@/components/productItem";
import Coursecard from "@/components/Coursecard/coursecard";
import SocialLinks from "@/components/SocialLinks";
import SignIn from "@/containers/SignIn";
import BillingDetail from "@/components/form/billingDetail";
import EditProfile from "@/components/form/editProfile";

export default function Home() {
  function onClick() {}
  return (
    <div className="h-full">
      <SocialLinks onClick={onClick} />
      {/* <ProductItem />
      <Coursecard /> */}
      {/* <SignIn /> */}
      {/* <BillingDetail/> */}
      <EditProfile/>
    </div>
  );
}
