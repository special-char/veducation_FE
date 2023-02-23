import DonationCard2 from "@/components/DonationCard";
import Productlist from "@/components/ProductList";
import SocialLinks from "@/components/SocialLinks";
import SocialIcon from "@/components/SocialLinks/SocialIcon";
import { ProductContext } from "@/context/ProductContextProvider";
import { getGoogleSignInRequest } from "@/lib/getGoogleSignInRequest";
import Imag1 from "public/img1.png";
import SignIn from "../SignIn";

const HomePage = async (props) => {
  // const {
  //   state: { authToken },
  //   dispatch,
  // } = useContext(ProductContext);
  const token = props?.searchParams.access_token;
  // const token = `${new URLSearchParams(props?.searchParams.access_token).toString()}`;

  if (token) {
    console.log({ token });
    const response = await getGoogleSignInRequest(token);

    console.log({ response }, "home");
  }

  return (
    <section>
      <SocialLinks />
      <Productlist id={1} />
      <SignIn />

      <DonationCard2
        img={Imag1}
        title="Help us spread Dharma"
        desc="Help us in this mission of spreading this ancient knowledge
            all over the world. So that we can again make India,'The Golden
            Bird'"
        btnText="3 Ways you can help us"
      />
    </section>
  );
};

export default HomePage;
