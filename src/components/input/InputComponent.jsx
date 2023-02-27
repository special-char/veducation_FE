"use client";
import React from "react";
import clsx from "classnames";

const Input2 = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  meta,
  className,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={props.id} className="text-xs text-primary4 mb-1">
        {props.label}
      </label>
      <input
        onChange={onchange}
        className={clsx(
          " p-2 placeholder-secondary  bg-[#FCE9CF] border border-[#F5D9B1] px-3 py-3 rounded-md text-base",
          {
            [className]: !!className,
          }
        )}
        type="text"
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <p className="text-red-500 text-sm mt-2">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default Input2;
