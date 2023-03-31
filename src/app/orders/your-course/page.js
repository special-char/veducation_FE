import { getSessionUser } from "@/app/orderconfirmed/page";
import PurchasedItems from "@/app/orderconfirmed/PurchasedList";
import Coursecard from "@/components/Coursecard/coursecard";
import { getPurchasedCourses } from "@/lib/getPurchasedCourses";
import { getPuchasedItems } from "@/lib/getPurchasedItems";
import { getUser } from "@/lib/getUser";
import { headers } from "next/headers";
import React from "react";
import { Link } from "react-router-dom";

const page = async () => {
  const session = await getSessionUser(headers().get("cookie") ?? "");
  const users = await getUser();
  const user = users?.find((item) => item?.email === session?.user?.email);
  //console.log("purchasedCourse sYourOrderPage:", user);
  const purchasedCourse = await getPurchasedCourses(user?.id);
  //console.log("purchasedCourse...:", purchasedCourse?.data);
  console.log("your-course user:", user);
  //fetched purchased courses your-courses-purchased

  return (
    <div className="px-container md:p-0 pt-4 grid md:grid-cols-2 gap-3">
      {purchasedCourse?.data.length > 0 ? (
        purchasedCourse?.data?.map((val) => {
          return <Coursecard users={user} key={val.id} {...val} />;
        })
      ) : (
        <div className="h-[79vh] w-full flex items-center justify-center">
          <span className="bg-primary text-white font-semibold text-sm text-center px-10 py-2 rounded-md">
            No Courses available
          </span>
        </div>
      )}
      {/* <Coursecard /> */}
    </div>
  );
  // const session = await getSessionUser(headers().get("cookie") ?? "");
  // const users = await getUser();
  // const user = users?.find((item) => item?.email === session?.user?.email);
  // console.log("purchasedCourse sYourOrderPage:", user);
  // const purchasedCourse = await getPurchasedCourses(user?.id);

  // const isPurchased = purchasedCourse
  //   //fetched purchased courses your-courses-purchased
  //   .return(
  //     <div className="px-container md:p-0 pt-4">
  //       {purchasedCourse?.data?.map((val) => {
  //         return (
  //           <>
  //             <Coursecard key={val.id} {...val} />
  //           </>
  //         );
  //       })}
  //       {/* <Coursecard /> */}
  //     </div>
  //   );
};

export default page;
