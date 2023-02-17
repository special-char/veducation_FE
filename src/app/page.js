// import Input from "@/components/InputComponent";
import Accordian from "@/components/Accordian";
import CourseDetails from "@/components/CourseDetails";
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";
import SocialLinks from "@/components/SocialLinks";

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
  return (
    <div className="h-full px-container">
      <SocialLinks />
      <CourseDetails />
    </div>
  );
}
