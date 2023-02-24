import React from "react";
import styles from "../InputComponent/input.module.css";
import clsx from "classnames";

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  className,
  id,
  ...props
}) => {
  return (
    <div className={styles.section}>
      <label htmlFor={id} className="body">
        {props.label}
      </label>{" "}
      <input
        id={id}
        className={clsx(
          "w-full p-2 placeholder-secondary  bg-[#FCE9CF] border border-[#F5D9B1] px-3 py-3 rounded-md text-base",
          {
            [className || ""]: !!className,
          }
        )}
        {...field}
        {...props}
      />
      {!!touched[field.name] && !!errors[field.name] && (
        <p className="text-sm text-error font-semibold">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default Input;
