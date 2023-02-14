import React from "react";
import "../InputComponent/input.modual.css";

const Input = ({ ...props }) => {
  return (
    <div className="section ">
      <label className="body">{props.label}</label>{" "}
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        {...props}
        className="inbox"
      />
    </div>
  );
};

export default Input;
