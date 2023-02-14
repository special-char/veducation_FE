import React from "react";
import styles from "./style.module.css";

const data = [
  {
    name: "Home",
  },
  {
    name: "Library",
  },
  {
    name: "Courses",
  },
  {
    name: "Yodha Store",
  },
  {
    name: "More",
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      {data.map((x) => (
        <a className={styles.footer__item}>
          <img src="" />
          <p>{x.name}</p>
        </a>
      ))}
    </div>
  );
};

export default Footer;
