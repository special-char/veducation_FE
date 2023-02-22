import Btnnavigator from "@/components/Buttonnavigator";
import React from "react";
import Eye from "public/icons/eye.svg";
import Edit from "public/icons/edit.svg";

const Btndata = [
  {
    id: 1,
    icon: <Eye width="20" />,
    title: "Edit Profile",
  },
  {
    id: 2,
    icon: <Edit width="20" />,
    title: "Change Password",
  },
];

const ProfileSetting = () => {
  return (
    <div className="pt-4">
      {Btndata.map((val) => {
        return <Btnnavigator key={val.id} icon={val.icon} title={val.title} />;
      })}
    </div>
  );
};

export default ProfileSetting;
