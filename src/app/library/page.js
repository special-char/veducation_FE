import Library from "@/containers/Library";
import { getAllBooksData } from "@/lib/getAllBooksData";
import React from "react";

const Page = async (props) => {
  const allbooks = await getAllBooksData();
  return (
    <div>
      <Library {...props} allbooks={allbooks} />
    </div>
  );
};

export default Page;
