import React from "react";
import styles from "../InputComponent/input.module.css";

const Input = ({ ...props }) => {
  return (
    <div className={styles.section}>
      <label className="body">{props.label}</label>{" "}
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        {...props}
        className="inbox w-full p-2 placeholder-secondary border border-[#F5D9B1] rounded-md px-2 text-base"
      />
    </div>
  );
};

export default Input;
