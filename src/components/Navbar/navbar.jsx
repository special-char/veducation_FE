import React from "react";

import "../Navbar/navbar.module.css";
import Home from "public/icons/home.svg";
import Book from "public/icons/book.svg";
import Group from "public/icons/group.svg";

import Menubar from "public/icons/menubar.svg";
import Yoddha from "public/icons/yoddha.svg";

const Data = [
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
    <div className="flex items-center  justify-center px-container gap-6 bg-primary3">
      {Data.map((val) => {
        return (
          <div key={val.id} className="py-3 flex flex-col items-center gap-4  ">
            <div className="w-5">{val.svg}</div>
            <div className="text-xs text-center">{val.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
