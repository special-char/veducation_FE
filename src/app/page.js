import Button from "@/components/Button";
import Navbar from "@/components/Navbar/navbar";
import SignIn from "@/containers/SignIn";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Button as={Link} variant="primary" size="large" href="">
        Submit
      </Button>
    </div>
  );
}
