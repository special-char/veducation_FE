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
  const purchasedCourse = await getPurchasedCourses(user?.id);
  //fetched purchased courses your-courses-purchased

  return (
    <div className="px-container md:p-0 pt-4 grid md:grid-cols-2 gap-3">
      {purchasedCourse?.data?.length > 0 ? (
        purchasedCourse?.data?.map((val) => {
          return <Coursecard users={user} key={val.id} {...val} />;
        })
      ) : (
        <div className="h-[79vh] w-full flex items-center justify-center">
          <span className="bg-primary text-white font-semibold text-sm text-center px-10 py-2 rounded-md">
            You have not purchased any course
          </span>
        </div>
      )}
      {/* <Coursecard /> */}
    </div>
  );
};

export default page;
