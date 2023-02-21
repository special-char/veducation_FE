import Coursecard from "@/components/Coursecard/coursecard";
import Navbar from "@/components/Navbar/navbar";
import ProductItem from "@/components/ProductList";
import SocialLinks from "@/components/SocialLinks";
import Btnnavigator from "@/components/Buttonnavigator";
import SignIn from "@/containers/SignIn";
import YourOrderPage from "@/components/yourOrdersPage/yourOrderPage";

export default function Home() {
  // function onClick() {}
  return (
    <div className="h-full pb-44">
      <SocialLinks />
      <SignIn />
      <YourOrderPage />
    </div>
  );
}
