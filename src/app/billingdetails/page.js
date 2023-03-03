import BillingDetails from "@/containers/BillingDetails";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { getBillingDetails } from "@/lib/getBillingDetails";
import { getUser } from "@/lib/getUser";

const Page = async () => {
  const user = await getUser();
  // const billingData = await getBillingDetails();
  // console.log(billingData.data, "billingDetails");
  return (
    <section className="">
      <BillingDetails user={user} />
    </section>
  );
};

export default Page;
