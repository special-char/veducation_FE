import React from "react";
import clx from "classnames";

const SocialIcon = ({ Icon, name, variant }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className={clx({
          "bg-gradient-to-tr from-[#C913B9] flex rounded-full flex-col h-[67px] w-[67px] justify-center items-center via-[#F9373F] to-[#FECD00]":
            variant === "social",
        })}
      >
        <div
          className={clx(
            "flex rounded-full flex-col h-[62px] w-[62px] justify-center items-center",
            {
              "bg-secondary  border-2 border-white": variant === "social",
            },
            {
              "bg-neutral-1000": variant === "user",
            }
          )}
        >
          <Icon />
        </div>
      </div>
      <p className="text-neutral-100 text-sm">{name}</p>
    </div>
  );
};

export default SocialIcon;
