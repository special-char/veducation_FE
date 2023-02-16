import React from "react";
import styles from "../Navbar/navbar.module.css";
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
    <div className={styles.navBar}>
      {data.map((val) => {
        const Svg = () => val.svg;
        return (
          <div key={val.id} className={styles.navBar__navItem}>
            <div className={styles.navBar__navItem__svg}>
              <Svg />
            </div>
            <div className={styles.navBar__navItem__desc}>{val.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
