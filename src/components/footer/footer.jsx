import React from "react";
import styles from "./style.module.css";
import Vector from "public/img/Vector.svg";
import Books from "public/img/book-3.svg";
import Courses from "public/img/courses.svg";
import Wepon from "public/img/wepon.svg";
import More from "public/img/more.svg";

const data = [
  {
    name: "Home",
    svg: <Vector />,
  },
  {
    name: "Library",
    svg: <Books />,
  },
  {
    name: "Courses",
    svg: <Courses />,
  },
  {
    name: "Yodha Store",
    svg: <Wepon />,
  },
  {
    name: "More",
    svg: <More />,
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      {data.map((x) => (
        <a className="footer__item" href="#">
          <span className="span1">{x.svg}</span>
          <p className="iteamn">{x.name}</p>
        </a>
      ))}
    </div>
  );
};

export default Footer;
