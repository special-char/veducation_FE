import React from "react";
import CartPage from "./cart";

const Page = (props) => {
  return (
    <div className="px-container h-full md:p-0">
      <CartPage {...props} />
    </div>
  );
};

export default Page;
