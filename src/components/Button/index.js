// "use client";
import clsx from "classnames";
import React from "react";

const Button = ({
  as: Tag,
  variant = "primary",
  size,
  isRound,
  className,
  ...rest
}) => {
  return (
    <Tag
      className={clsx("btn", {
        "btn--primary": variant === "primary",
        "btn--secondary": variant === "secondary",
        "btn--count": variant === "count",
        "btn--primary3": variant === "secondary2",
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
