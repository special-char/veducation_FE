"use client";
import React from "react";
import { Router } from "react-router-dom";
import Page from "./page";
import Switch from "./switch";

const layout = ({ children }) => {
  const Component1 = () => <div>component1</div>;
  const Component2 = () => <div>component2</div>;
  const child1 = {
    name: "component",
    Page: () => <Component1 />,
    btnTitle: "component 1",
  };
  const child2 = {
    name: "component2",
    Page: () => <Component2 />,
    btnTitle: "component 2",
  };
  console.log("demo layout");

  return (
    <div>
      <Switch child1={child1} child2={child2} />
    </div>
  );
};

export default layout;
