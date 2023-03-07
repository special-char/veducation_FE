"use client";
import React from "react";
import { useState } from "react";
import Page from "./page";

const Switch = ({
  child1 = { name, Page, btnTitle },
  child2 = { name, Page, btnTitle },
}) => {
  const [status, setStatus] = useState(child1.name);
  const Child1 = () => child1.Page();
  const Child2 = () => child2.Page();
  return (
    <div>
      <button
        className="border border-primary"
        onClick={() => {
          setStatus(child1.name);
        }}
      >
        {child1.btnTitle}
      </button>
      <button
        className="border border-primary"
        onClick={() => {
          setStatus(child2.name);
        }}
      >
        {child2.btnTitle}
      </button>
      {status === child1.name ? <Child1 /> : <Child2 />}
    </div>
  );
};

export default Switch;
