"use client";
import React, { useState } from "react";
import styles from "../InputComponent/input.module.css";
import clsx from "classnames";
import Checkbox from "../CheckBox";

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  className,
  id,
  icon: Icon,
  shown: Shown,
  ...props
}) => {
  const [type, setType] = useState(props.type);
  const [shown, setShown] = useState(false);
  // if (props.type === "checkbox") {
  //   return <Checkbox {...props} />;
  // }
  return (
    <div className={styles.section}>
      <label htmlFor={id} className="body">
        {props.label}
      </label>
      <div
        className="grid items-center"
        style={{
          gridTemplateColumns: "1fr auto",
        }}
      >
        <input
          id={id}
          type={!shown ? "text" : type}
          className={clsx(
            "w-full p-2 placeholder-secondary bg-[#FCE9CF] border border-[#F5D9B1] px-3 py-3 rounded-md text-base row-span-full col-span-full",
            {
              [className || ""]: !!className,
            }
          )}
          {...field}
          {...props}
        />
        {props.type === "password" && Icon && (
          <div
            role="button"
            onClick={() => {
              setShown((p) => !p);
            }}
            className="row-span-full px-2"
            style={{
              gridColumn: "2 / -1",
            }}
          >
            {shown ? <Shown /> : <Icon />}
          </div>
        )}
        {props.type !== "password" && Icon && (
          <div
            role="button"
            onClick={() => {
              alert("hello");
            }}
            className="row-span-full px-1"
            style={{
              gridColumn: "2 / -1",
            }}
          >
            <Icon />
          </div>
        )}
      </div>
      {touched && errors && !!touched[field?.name] && !!errors[field?.name] && (
        <p className="text-sm text-error font-semibold">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default Input;
