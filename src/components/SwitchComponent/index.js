"use client";
import React from "react";
import { useState } from "react";
import clx from "classnames";

const Switch = ({ childs }) => {
  const [status, setStatus] = useState({
    Page: childs[0]?.Page(),
    component: childs[0]?.name,
  });
  const Component = () => status.Page;
  return (
    <div>
      <span className="flex flex-1">
        {childs.map((child) => (
          <button
            key={child?.name}
            className={clx("border-b flex-1 font-bold", {
              "border-b-primary border-b-[3px] z-10 text-primary ":
                child?.name === status.component,
            })}
            onClick={() => {
              setStatus((prev) => {
                return { component: child?.name, Page: child.Page() };
              });
            }}
          >
            {child.btnTitle}
          </button>
        ))}
      </span>

      <Component />
    </div>
  );
};

export default Switch;
