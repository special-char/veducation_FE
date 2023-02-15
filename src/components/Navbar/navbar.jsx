import React from "react";

import "../Navbar/navbar.module.css";
import Home from "public/icons/home.svg";
import Book from "public/icons/book.svg";
import Group from "public/icons/group.svg";

import Menubar from "public/icons/menubar.svg";
import Yoddha from "public/icons/yoddha.svg";

const data = [
  {
    id: 1,
    svg: <Home />,
    desc: "Home",
  },
  {
    id: 2,
    svg: <Book />,
    desc: "Library",
  },
  {
    id: 3,
    svg: <Group />,
    desc: "Courses",
  },
  {
    id: 4,
    svg: <Yoddha />,
    desc: "Yodhha Store",
  },
  {
    id: 5,
    svg: <Menubar />,
    desc: "more",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-1 justify-evenly gap-3 sticky bottom-0">
      {data.map((val) => {
        const Svg = () => val.svg;
        return (
          <div key={val.id} className="flex max-w-[50px] flex-col items-center">
            <div className="w-5  pb-3">
              <Svg />
            </div>
            <div className="text-xs text-center">{val.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
