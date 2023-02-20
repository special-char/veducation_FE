import React from "react";
import GadaMudgals from "./GadaMudgals";
import SadhanaStuff from "./SadhanaStuff";
import TshirtStuff from "./Tshirt";
import Tshirt from "./Tshirt";

const Page = () => {
  return (
    <div className="h-full pb-28 px-container">
      <GadaMudgals />
      <SadhanaStuff />
      <TshirtStuff />
    </div>
  );
};

export default Page;
