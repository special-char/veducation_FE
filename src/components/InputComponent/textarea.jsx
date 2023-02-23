import React from "react";
import styles from "../InputComponent/input.module.css";
import clsx from "classnames";

const Textarea = ({ className, ...props }) => {
  return (
    <div className={styles.section}>
      <label className="body">{props.label}</label>{" "}
      <textarea
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        {...props}
        className={clsx(
          "w-full p-2 placeholder-secondary  bg-[#FCE9CF] border border-[#F5D9B1] px-3 py-2 rounded-md text-base",
          {
            [className || ""]: !!className,
          }
        )}
        
      />
    </div>
  );
};

export default Textarea;


