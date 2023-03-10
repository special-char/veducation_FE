"use client";
import React from "react";
import clx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Switch = ({ childs = [{ name, btnTitle }] }) => {
  const pathname = usePathname();

  return (
    <div>
      <span className="flex flex-1 ">
        {childs?.map((child) => (
          <Link
            href={child.name}
            key={child?.name}
            className={clx("flex-1 font-bold border-b-2 border-[#BABABA]", {
              "border-b-primary border-b-2": pathname === child.name,
            })}
          >
            <div
              className={clx("text-center ", {
                "text-primary ": pathname === child.name,
              })}
            >
              {child?.btnTitle}
            </div>
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Switch;
