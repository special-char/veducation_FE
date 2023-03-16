import React from "react";
import clx from "classnames";
import Link from "next/link";
import Image from "next/image";

const SocialIcon = ({ svg, title, variant, link }) => {
  return (
    <Link href={link}>
      <div className="flex justify-center items-center flex-col">
        <div
          className={clx(
            "flex rounded-full flex-col h-[67px] w-[67px] justify-center items-center ",
            {
              "bg-gradient-to-tr from-[#FECD00] flex rounded-full flex-col h-[67px] w-[67px] justify-center items-center via-[#F9373F] to-[#C913B9]":
                variant === "social",
              // "bg-gradient-to-tr from-[#C913B9] flex rounded-full flex-col h-[67px] w-[67px] justify-center items-center via-[#F9373F] to-[#FECD00]":
            }
          )}
        >
          <div
            className={clx(
              "flex rounded-full flex-col h-[62px] w-[62px] justify-center items-center",
              {
                "bg-secondary  border-2 border-white": variant === "social",
              },
              {
                "bg-neutral-1000 border-2 border-transparent":
                  variant === "user",
              }
            )}
          >
            <div className=" ">
              <Image src={svg} width={20} height={20} />
            </div>
            {/* <img src={svg} alt="" /> */}
          </div>
        </div>
        <p className="text-neutral-100 text-sm min-w-max">{title}</p>
      </div>
    </Link>
  );
};

export default SocialIcon;
