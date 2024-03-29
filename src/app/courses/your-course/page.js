import { getSessionUser } from "@/app/orderconfirmed/page";
import Coursecard from "@/components/Coursecard/coursecard";
import { getPurchasedCourses } from "@/lib/getPurchasedCourses";
import { getUser } from "@/lib/getUser";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await getSessionUser(headers().get("cookie") ?? "");
  const users = await getUser();
  const user = users?.find((item) => item?.email === session?.user?.email);
  //console.log("purchasedCourse sYourOrderPage:", user);
  const purchasedCourse = await getPurchasedCourses(user?.id);
  //console.log("purchasedCourse...:", purchasedCourse?.data);
  //console.log("your-course user:", user);
  //fetched purchased courses your-courses-purchased

  return (
    <div className="px-container md:p-0 pt-4 grid md:grid-cols-2 gap-3">
      {purchasedCourse?.data?.map((val) => {
        return <Coursecard users={user} key={val.id} {...val} />;
      })}
      {/* <Coursecard /> */}
    </div>
  );
};

export default page;
