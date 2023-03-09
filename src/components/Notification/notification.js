import React from "react";
import styles from "./notification.module.css";
import BellSvg from "/public/icons/bellicon.svg";

const Notification = ({ ...props }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__page}>
        <BellSvg className="w-4 h-4" />
      </div>
      <div className={styles.main__body}>
        <h6 className={styles.main__order}>
          {props.title}:
          <p>
            {" "}
            Your Veducation Order
            <span className="text-primary2"> {props.code} </span>has been{" "}
            {props.msg}
          </p>
        </h6>
        <p className="text-[12px]">{props.duration}</p>
      </div>
    </div>
  );
};

export default Notification;
