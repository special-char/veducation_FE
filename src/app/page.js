"use client";
import Coursecard from "@/components/Coursecard/coursecard";
import Navbar from "@/components/Navbar/navbar";
import ProductItem from "@/components/productItem";
import SocialLinks from "@/components/SocialLinks";
import Btnnavigator from "@/components/Buttonnavigator";
import SignIn from "@/containers/SignIn";
import Varification from "@/containers/otpVarification";
import CourseDetails from "@/components/CourseDetails";
import Checkbox from "@/components/CheckBox";

const data = [
  {
    id: 1,
    title: "What will i learn from this course ?",
    description: "this is description",
  },
  {
    id: 2,
    title: "What will i learn from this course ?",
    description: "this is description",
  },
  {
    id: 3,
    title: "What will i learn from this course ?",
    description: "this is description",
  },
  {
    id: 4,
    title: "What will i learn from this course ?",
    description: "this is description",
  },
];

export default function Home() {
  function onClick() {}
  return (
    <div className="h-full ">
      <SocialLinks />
      <div className="px-container">
        <CourseDetails />
        {/* <SocialLinks />
      <ProductItem />
      <Coursecard /> */}
        <Btnnavigator />
        <Varification />
      </div>
    </div>
  );
}
