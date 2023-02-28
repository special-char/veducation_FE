"use client";
import React, { useState } from "react";
import styles from "./checkbox.module.css";

export default function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  console.log({ props });
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    if (props.onChange) {
      props.onChange(!isChecked);
    }
  }

  return (
    <>
      <div className={styles.main}>
        <label>{props.label}</label>
        <div className={styles.main__inputcontainer}>
          <div className={styles.main__container}>
            <input
              type="checkbox"
              // checked={isChecked}
              // onChange={handleCheckboxChange}
              name={props.name}
              {...props}
              // value={props.value}
              // disabled={props.disabled}
            />
            {/* <span class={styles.main__checkmark}></span> */}
            <label className="mb-0 ">{props.value}</label>
          </div>
        </div>
      </div>
    </>
  );
}
