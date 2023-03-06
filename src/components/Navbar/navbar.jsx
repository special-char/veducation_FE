"use client";
import React from "react";
import styles from "../Navbar/navbar.module.css";
import Home from "public/icons/home.svg";
import Book from "public/icons/book.svg";
import Group from "public/icons/Group.svg";
import Menubar from "public/icons/menubar.svg";
import Yoddha from "public/icons/yoddha.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clx from "classnames";

const data = [
  {
    id: 1,
    svg: ({ fill }) => <Home fill={fill} />,
    desc: "Home",
    href: "/",
  },
  {
    id: 2,
    svg: ({ fill }) => <Book fill={fill} />,
    desc: "Library",
    href: "/library",
  },
  {
    id: 3,
    svg: ({ fill }) => <Group fill={fill} />,
    desc: "Courses",
    href: "/courses",
  },
  {
    id: 4,
    svg: ({ fill }) => <Yoddha fill={fill} />,
    desc: "Yodhha Store",
    href: "/yoddha-store",
  },
  {
    id: 5,
    svg: ({ fill }) => <Menubar fill={fill} />,
    desc: "More",
    href: "/more",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-background w-full bottom-0 fixed z-10  justify-center">
      <nav className={styles.navBar}>
        {data.map((val) => {
          const Svg = val.svg;
          return (
            <Link
              href={val.href}
              key={val.id}
              className={styles.navBar__navItem}
            >
              <div className={styles.navBar__navItem__svg}>
                <Svg fill={pathname === val.href ? "#FF7136" : "#222"} />
              </div>
              <div
                className={clx(styles.navBar__navItem__desc, {
                  "text-[#FF7136]": pathname === val.href,
                  // "text-[#222]": pathname !== val.href,
                })}
              >
                {val.desc}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
