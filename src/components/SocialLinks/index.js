"use client";
import React, { useContext, useEffect } from "react";
import SocialIcon from "./SocialIcon";
import YoutubeSvg from "../../../public/youtubesvg.svg";
import InstagramSvg from "../../../public/instagramSvg.svg";
import UserSvg from "../../../public/user.svg";
import SpotifySvg from "../../../public/spotify.svg";
import FacebookSvg from "../../../public/facebook.svg";
import Plus from "../../../public/plus.svg";
import AppContextProvider, {
  AppContext,
  useAppContext,
} from "@/context/AppContextProvider";
import { useSession } from "next-auth/react";
import Link from "next/link";

const SocialLinks = ({ sociallinks }) => {
  //console.log("sociallinks:", sociallinks.data);
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
    ...sociallinks.data,
  ];
  // console.log("socials data map:", socials);
  return (
    <div className="flex gap-3 overflow-x-scroll no-scrollbar p-1">
      {socials.map((social) => {
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
              svg={social?.attributes.variant === "user" ? social?.attributes.svg : social?.attributes.svg?.data?.attributes?.url}
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
