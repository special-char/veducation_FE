import React from "react";
import { getSessionUser } from "../orderconfirmed/page";
import { headers } from "next/headers";
import { getUser } from "@/lib/getUser";
import { getPuchasedItems } from "@/lib/getPurchasedItems";
import PurchasedItems from "../orderconfirmed/PurchasedList";

// const items = [
//   {
//     img: Tshirt,
//     item: "Veducation T Shirt - Mens Tshirt Pure Black",
//     price: "25.00",
//     totalpcs: "3pcs",
//     arriving: "12 june",
//     deliveredOn: "13 june",
//   },
//   {
//     img: Tshirt,
//     item: "Veducation T Shirt - Mens Tshirt Pure Black",
//     price: "25.00",
//     totalpcs: "3pcs",
//     arriving: "12 june",
//     deliveredOn: "13 june",
//   },
//   {
//     img: Tshirt,
//     item: "Veducation T Shirt - Mens Tshirt Pure Black",
//     price: "25.00",
//     totalpcs: "3pcs",
//     arriving: "12 june",
//     deliveredOn: "13 june",
//   },
//   {
//     img: Tshirt,
//     item: "Veducation T Shirt - Mens Tshirt Pure Black",
//     price: "25.00",
//     totalpcs: "3pcs",
//     arriving: "12 june",
//     deliveredOn: "13 june",
//   },
//   {
//     img: Tshirt,
//     item: "Veducation T Shirt - Mens Tshirt Pure Black",
//     price: "25.00",
//     totalpcs: "3pcs",
//     arriving: "12 june",
//     deliveredOn: "13 june",
//   },
//   {
//     img: Tshirt,
//     item: "Veducation T Shirt - Mens Tshirt Pure Black",
//     price: "25.00",
//     totalpcs: "3pcs",
//     arriving: "12 june",
//     deliveredOn: "13 june",
//   },
//   {
//     img: Tshirt,
//     item: "Veducation T Shirt - Mens Tshirt Pure Black",
//     price: "25.00",
//     totalpcs: "3pcs",
//     arriving: "12 june",
//     deliveredOn: "13 june",
//   },
//   {
//     img: Tshirt,
//     item: "Veducation T Shirt - Mens Tshirt Pure Black",
//     price: "25.00",
//     totalpcs: "3pcs",
//     arriving: "12 june",
//     deliveredOn: "13 june",
//   },
// ];

const YourOrderPage = async () => {
  const session = await getSessionUser(headers().get("cookie") ?? "");
  const users = await getUser();
  const user = users?.find((item) => item?.email === session?.user?.email);
  const purchaseData = await getPuchasedItems(user?.id);
  console.log({ purchaseData });
  return (
    <div className="h-auto pb-36">
      {/* <PurchasedItems purchaseData={purchaseData} user={user} myorder /> */}
    </div>
  );
};

export default YourOrderPage;
