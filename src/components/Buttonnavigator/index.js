import Image from "next/image";
import React from "react";
import BtnNavigator from "public/icons/navigator.svg";
import Arrow from "public/icons/arrow.svg";
import styles from "./navigator.module.css";
import Link from "next/link";

const btndata = [
  {
    id: 1,
    svg1: <BtnNavigator />,
    title: "My Orders",
  },
  {
    id: 1,
    svg1: <BtnNavigator />,
    title: "My Orders",
  },
  {
    id: 2,
    svg1: <BtnNavigator />,
    title: "My Orders",
  },
  {
    id: 3,
    svg1: <BtnNavigator />,
    title: "My Orders",
  },
  {
    id: 4,
    svg1: <BtnNavigator />,
    title: "My Orders",
  },
  {
    id: 5,
    svg1: <BtnNavigator />,
    title: "My Orders",
  },
  {
    id: 6,
    svg1: <BtnNavigator />,
    title: "My Orders",
  },
  {
    id: 7,
    svg1: <BtnNavigator />,
    title: "My Orders",
  },
];

const Btnnavigator = ({ icon, title, desc, href }) => {
  return (
    <Link href={href} className="flex flex-col gap-2">
      <div className={styles.navRoot}>
        <span className={styles.navRoot__body}>
          {icon}
          <span className="flex flex-col">
            <h6 className="mb-0 text-base font-bold text-secondary">{title}</h6>
            <p className="text-base">{desc && desc}</p>
          </span>
        </span>
        <Arrow />
      </div>
    </Link>
  );
};

export default Btnnavigator;
