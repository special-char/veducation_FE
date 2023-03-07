"use client";
import Switch from "@/components/SwitchComponent";
import React from "react";

const layout = ({ children }) => {
  const Component1 = () => <div>component1</div>;
  const Component2 = () => <div>component2</div>;
  const Component3 = () => <div>component3</div>;
  const child1 = {
    name: "Component",
    Page: () => <Component1 />,
    btnTitle: "Component1",
  };
  const child2 = {
    name: "Component2",
    Page: () => <Component2 />,
    btnTitle: "Component2",
  };
  const child3 = {
    name: "Component3",
    Page: () => <Component3 />,
    btnTitle: "Component 3",
  };
  console.log("demo layout");

  return (
    <div>
      <Switch childs={[child1, child2]} />
    </div>
  );
};

export default layout;
