"use client";
import React, { useContext, useEffect } from "react";
import SocialIcon from "./SocialIcon";
import YoutubeSvg from "../../../public/youtubesvg.svg";
import InstagramSvg from "../../../public/instagramSvg.svg";
import UserSvg from "../../../public/user.svg";
import SpotifySvg from "../../../public/spotify.svg";
import FacebookSvg from "../../../public/facebook.svg";
import Plus from "../../../public/plus.svg";
import ProductContextProvider, {
  ProductContext,
  useProductsContext,
} from "@/context/ProductContextProvider";
import { useSession } from "next-auth/react";

const SocialLinks = () => {
  const data = useSession();
  const {
    state: { signIn, user },
    dispatch,
  } = useProductsContext();
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
      variant: "user",
      Icon: () => <UserSvg />,
      name: user?.data?.user?.name ?? "Signup/Login",
    },
    {
      variant: "social",
      Icon: () => <YoutubeSvg />,
      name: "Youtube",
    },
    {
      variant: "social",
      Icon: () => <InstagramSvg />,
      name: "Instagram",
    },
    {
      variant: "social",
      Icon: () => <SpotifySvg />,
      name: "Spotify",
    },
    {
      variant: "social",
      Icon: () => <FacebookSvg />,
      name: "Facebook",
    },
  ];

  return (
    <div className="flex gap-3 overflow-x-scroll no-scrollbar p-1">
      {socials.map((social) => {
        return (
          <div
            onClick={() => {
              if (social.variant === "user") {
                dispatch({ signIn: true });
                return;
              }
            }}
            key={social.name}
            className="relative"
          >
            <SocialIcon
              variant={social.variant}
              Icon={social.Icon}
              name={social.name}
            />
            {social.variant === "user" && !data?.data?.user && (
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
