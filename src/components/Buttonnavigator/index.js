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

const Btnnavigator = (props) => {
  const { icon, title, desc, component: Component, ...linkProps } = props;
  // const Component = () => component;
  return (
    <Component {...linkProps} className={styles.main}>
      <div className={styles.navRoot}>
        <span className={styles.navRoot__body}>
          {icon}
          <span className={styles.navRoot__span}>
            <h6 className={styles.navRoot__title}>{title}</h6>
            <p className={styles.navRoot__desc}>{desc && desc}</p>
          </span>
        </span>
        <Arrow className="w-2" />
      </div>
    </Component>
  );
};

export default Btnnavigator;
