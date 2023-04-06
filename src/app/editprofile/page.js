import UpdateUser from "@/containers/UpdateUser";
import { getUser } from "@/lib/getUser";
import { getUseredits } from "@/lib/getuseredits";
import { useSession } from "next-auth/react";
import React from "react";

const EditProfile = async () => {
  const users = await getUser();
  const useredit = await getUseredits();

  return (
    <div>
      <UpdateUser users={users} useredit={useredit} />
    </div>
  );
};

export default EditProfile;
