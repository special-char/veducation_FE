"use client";
import React, { useEffect } from "react";
import SocialIcon from "./SocialIcon";
import Plus from "../../../public/plus.svg";
import { useAppContext } from "@/context/AppContextProvider";
import { useSession } from "next-auth/react";
import { baseUrl } from "@/utils/constants";

const SocialLinks = ({ sociallinks }) => {
  const data = useSession();
  const {
    state: { signIn, user },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    if (data?.data?.user?.email) {
      setTimeout(() => {
        dispatch({ user: data });
      }, 1000);
    }
    return () => {};
  }, [data?.data?.user?.email]);
  const socials = [
    {
      id: 11,
      attributes: {
        variant: "user",
        svg: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
        title: user?.data?.user?.name ?? "Signup/Login",
        link: "",
      },
    },
    ...sociallinks?.data,
  ];
  return (
    <div className="flex gap-3 overflow-x-scroll no-scrollbar p-1">
      {socials.map((social) => {
        const url = social?.attributes?.svg?.data?.attributes?.url;
        const imageUrl = new URL(url, baseUrl).href;
        return (
          <div
            key={social?.attributes.name}
            onClick={() => {
              if (social?.attributes.variant === "user") {
                dispatch({ signIn: true });
                return;
              }
            }}
            className="relative"
          >
            <SocialIcon
              variant={social?.attributes.variant}
              svg={
                social?.attributes.variant === "social"
                  ? imageUrl
                  : social?.attributes.svg
              }
              title={social?.attributes.title}
              link={social?.attributes.link}
            />

            {social?.attributes.variant === "user" && !data?.data?.user && (
              <div className="absolute z-10 bottom-8 right-3">
                <Plus />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinks;
