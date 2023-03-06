"use client";
import Btnnavigator from "@/components/Buttonnavigator";
import React from "react";
import Myorders from "public/icons/myorders.svg";
import Profile from "public/icons/user.svg";
import Call from "public/icons/call.svg";
import Navigator from "public/icons/navigator.svg";
import Invite from "public/icons/send.svg";
import JoinSena from "public/icons/link.svg";
import Info from "public/icons/about.svg";
import AppContextProvider, {
  AppContext,
  useAppContext,
} from "@/context/AppContextProvider";
import Button from "@/components/Button";
import Link from "next/link";
import InviteUs from "@/components/Invitationmodal";
import SuccessModal from "@/components/SuccessModal";

const MenuSection = () => {
  const { dispatch } = useAppContext();
  const data = [
    {
      icon: <Myorders className="w-5" />,
      title: "My Orders",
      href: "/myorders",
      component: Link,
    },
    {
      icon: <Profile className="w-5" />,
      title: "Profile",
      href: "/profilesettings",
      component: Link,
    },
    {
      icon: <Call className="w-5" />,
      title: "Book a Consultation Call",
      href: "/",
      component: Link,
    },
    {
      icon: <Invite className="w-5" />,
      title: "Invite Us",
      // href: "#",
      component: "button",
      onClick: () => {
        dispatch({ inviteUs: true });
      },
    },
    {
      icon: <JoinSena className="w-5" />,
      title: "Join Pandav Sena",
      href: "/",
      component: Link,
    },
    {
      icon: <Info className="w-5" />,
      title: "About Veducation",
      component: Link,
      href: "/about",
    },
  ];
  return (
    <section className="pt-4 flex flex-col gap-3">
      <InviteUs />
      <SuccessModal
        title="Thanks for inviting"
        description="we will revert as soon as possible"
        btnText="Back to Home"
        href="/"
      />
      {data.map((val) => {
        return (
          <Btnnavigator
            key={val.title}
            // href={val.href}
            // icon={val.icon}
            // title={val.title}
            // desc={val.desc}
            {...val}
          />
        );
      })}
    </section>
  );
};

export default MenuSection;
