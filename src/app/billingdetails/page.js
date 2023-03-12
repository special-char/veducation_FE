import BillingDetails from "@/containers/BillingDetails";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { getBillingDetails } from "@/lib/getBillingDetails";
import { getUser } from "@/lib/getUser";

const Page = async (props) => {
  const user = await getUser();
  return (
    <section className="">
      <BillingDetails user={user} {...props} />
    </section>
  );
};

export default Page;
