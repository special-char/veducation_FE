import Btnnavigator from "@/components/Buttonnavigator";
import React from "react";
import Myorders from "public/icons/myorders.svg";
import Profile from "public/icons/user.svg";
import Call from "public/icons/call.svg";
import Navigator from "public/icons/navigator.svg";
import Invite from "public/icons/send.svg";
import JoinSena from "public/icons/link.svg";
import Info from "public/icons/about.svg";

const data = [
  {
    icon: <Myorders className="w-5" />,
    title: "My Orders",
    href: "/myorders",
  },
  {
    icon: <Profile className="w-5" />,
    title: "Profile",
    href: "/profilesettings",
  },
  {
    icon: <Call className="w-5" />,
    title: "Book a Consultation Call",
    href: "/",
  },
  {
    icon: <Invite className="w-5" />,
    title: "Invite Us",
    href: "/",
  },
  {
    icon: <JoinSena className="w-5" />,
    title: "Join Pandav Sena",
    href: "/",
  },
  {
    icon: <Info className="w-5" />,
    title: "About Veducation",
    href: "/about",
  },
];

const MenuSection = () => {
  return (
    <section className="pt-4 flex flex-col gap-3">
      {data.map((val) => {
        return (
          <Btnnavigator
            key={val.title}
            href={val.href}
            icon={val.icon}
            title={val.title}
            desc={val.desc}
          />
        );
      })}
    </section>
  );
};

export default MenuSection;
