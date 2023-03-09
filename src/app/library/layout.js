"use client";
import Switch from "@/components/SwitchComponent";
import Library from "@/containers/Library";
import React from "react";
import Page from "./page";

const child1 = {
  name: "Component",
  Page: () => <Page />,
  btnTitle: "Explore",
};
const child2 = {
  name: "Component2",
  Page: () => <div>Work in progress</div>,
  btnTitle: "Your Books",
};

const childs = [child1, child2];

const Layout = (props) => {
  return (
    <div>
      <Switch childs={childs} />
    </div>
  );
};

export default Layout;
