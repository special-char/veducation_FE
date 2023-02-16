import clsx from "classnames";
import React from "react";

const Button = ({ as: Tag, variant, size, isRound, className, ...rest }) => {
  return (
    <Tag
      className={clsx("btn", {
        "btn--primary": variant === "primary",
        "btn--primary3": variant === "primary2",
        "btn--secondary": variant === "secondary",
        "btn--small": size === "small",
        "btn--large": size === "large",
        "btn--count": size === "count",
        "btn--round": isRound,
        [className || ""]: !!className,
      })}
      {...rest}
    />
  );
};

export default Button;
