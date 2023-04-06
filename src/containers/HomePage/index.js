import HomeBanner from "@/components/HomeBanner";
import Productlist from "@/components/ProductList";
import SocialLinks from "@/components/SocialLinks";
import VideoComponent from "@/components/videocomponent";

import { getGoogleSignInRequest } from "@/lib/getGoogleSignInRequest";
import { getSocialLinks } from "@/lib/getSocialLinks";
import FeatureDonations from "../home/FeaturDonations";
import SignIn from "../SignIn";
import SignUpDetails from "../SignUpDetails";

const HomePage = async (props) => {
  // const {
  //   state: { authToken },
  //   dispatch,
  // } = useContext(AppContext);
  const token = props?.searchParams.access_token;
  // const token = `${new URLSearchParams(props?.searchParams.access_token).toString()}`;

  if (token) {
    const response = await getGoogleSignInRequest(token);
  }

  const socialLinksData = await getSocialLinks();
  //console.log("socialLinksData:", socialLinksData.data);
  return (
    <section>
      <SocialLinks sociallinks={socialLinksData} />
      <SignIn />
      <SignUpDetails />
      <HomeBanner />
      <Productlist id={1} />
      <FeatureDonations />
    </section>
  );
};

export default HomePage;
