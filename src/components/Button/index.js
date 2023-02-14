import clsx from "clsx";
import React from "react";

const Button = ({ ...props }) => {
  return (
    <button
      className={clsx("btn", {
        "btn--primary": props.variant === "primary",
        "btn--primary3": props.variant === "primary2",
        //"btn--secondary": props.variant === "secondary",
        "btn--small": props.size === "small",
        "btn--large": props.size === "large",
        "btn--count": props.size === "count",
        "btn--round": props.isRound,
        [props.className || ""]: !!props.className,
      })}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
