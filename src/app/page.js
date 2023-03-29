import React from "react";
import HomePage from "@/containers/HomePage";

export default function Page(props) {
  // function onClick() {}
  return (
    <div className="h-full xs:px-container md:px-0 overflow-hidden">
      <HomePage {...props} />
    </div>
  );
}
