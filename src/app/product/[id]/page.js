"use client";
import { useRouter } from "next/router";
import React from "react";

const Page = (props) => {
  console.log(props.params.id, "dynamic page");
  return <div>dynamic page{props.params.id}</div>;
};

export default Page;
