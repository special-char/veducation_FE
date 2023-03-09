import Notification from "@/components/Notification/notification";
import React from "react";

const data = [
  {
    title: "Order Shipped:",
    msg: "Your Veducation Order has been dispatched",
    code: "#242424",
    duration: "2 hours Ago",
  },
  {
    title: "Order Canclled:",
    msg: "Your Veducation Order has been dispatched",
    code: "#242424",
    duration: "2 hours Ago",
  },
  {
    title: "Order Shipped:",
    msg: "Your Veducation Order has been dispatched",
    code: "#242424",
    duration: "2 hours Ago",
  },
];

const Page = () => {
  return (
    <section className="px-container md:p-0">
      <h5 className="mb-0 pb-4">Notification</h5>
      {data.map((val, index) => {
        return (
          <Notification
            key={index}
            title={val.title}
            msg={val.msg}
            code={val.code}
            duration={val.duration}
          />
        );
      })}
    </section>
  );
};

export default Page;
