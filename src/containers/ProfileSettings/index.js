import Btnnavigator from "@/components/Buttonnavigator";
import React from "react";
import Eye from "public/icons/eye.svg";
import Edit from "public/icons/edit.svg";
import Link from "next/link";

const Btndata = [
  {
    id: 1,
    icon: <Eye width="20" />,
    title: "Edit Profile",
    href: "/editprofile",
  },
  {
    id: 2,
    icon: <Edit width="20" />,
    title: "Change Password",
    href: "/changePassword",
  },
];

const ProfileSetting = () => {
  return (
    <div className="pt-4 px-container md:p-0 flex flex-col gap-2">
      {Btndata.map((val) => {
        return (
          <Btnnavigator
            href={val.href}
            key={val.id}
            icon={val.icon}
            title={val.title}
            component={Link}
          />
        );
      })}
    </div>
  );
};

export default ProfileSetting;
