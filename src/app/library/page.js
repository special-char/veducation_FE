import Library from "@/containers/Library";
import React from "react";

const Page = (props) => {
  return (
    <div>
      <Library {...props} />
    </div>
  );
};

export default Page;
