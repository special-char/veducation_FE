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
      {/* <>
        <h1>this is h1</h1>
        <h2>this is h2</h2>
        <h3>this is h3</h3>
        <h4>this is h4</h4>
        <h5>this is h5</h5>
        <h6>this is h6</h6>
        <p>this is p</p>
      </> */}
      <HomeBanner />
      <Productlist id={1} />
      <FeatureDonations />
    </section>
  );
};

export default HomePage;
