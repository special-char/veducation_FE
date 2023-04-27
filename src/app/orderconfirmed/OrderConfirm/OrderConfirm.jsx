import { dateFormat, formatTimeAgo } from "@/utils/constants";
import React from "react";

const OrderSucess = ({ date }) => {
  // const date = {
  //   date: "24",
  //   month: "Oct",
  //   year: "2023",
  // };
  return (
    <div>
      <div className="border-2 py-5 px-6 rounded-md  border-[#F5D9B1] bg-[#FCE9CF]">
        <p className="text-[#5C5C5C]">Thank you! 🎉</p>
        <span className="text-[#455441] text-xxl font-bold leading-[48px]">
          Your order has been received
        </span>
        <p className="text-[#455441] text-base leadig-[48px] ">
          Arriving by :{" "}
          <span className="text-[#4CA137] text-base font-bold">
            {/* {date.date}th {date.month} {date.year} */}
            {/* {`${dateFormat.format(new Date(date))}`} */}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderSucess;
