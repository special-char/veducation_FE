import CartPage from "@/app/cart/cart";
import AllBooks from "@/components/AllBooks";
import CourseDetails from "@/components/CourseDetails";
import DonationCard2 from "@/components/DonationCard";
import HomeBanner from "@/components/HomeBanner";
import Productlist from "@/components/ProductList";
import SocialLinks from "@/components/SocialLinks";
import SocialIcon from "@/components/SocialLinks/SocialIcon";
import { ProductContext } from "@/context/ProductContextProvider";
import { getGoogleSignInRequest } from "@/lib/getGoogleSignInRequest";
import Imag1 from "public/img1.png";
import FeatureDonations from "../home/FeaturDonations";
import SignIn from "../SignIn";
import SignUpDetails from "../SignUpDetails";

const HomePage = async (props) => {
  // const {
  //   state: { authToken },
  //   dispatch,
  // } = useContext(ProductContext);
  const token = props?.searchParams.access_token;
  // const token = `${new URLSearchParams(props?.searchParams.access_token).toString()}`;

  if (token) {
    const response = await getGoogleSignInRequest(token);
  }

  return (
    <section>
      <SocialLinks />
      <SignIn />
      {/* <SignUpDetails /> */}
      <HomeBanner />
      <Productlist id={1} />
      <FeatureDonations />
    </section>
  );
};

export default HomePage;
