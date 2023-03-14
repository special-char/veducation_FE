import UpdateUser from "@/containers/UpdateUser";
import { getUser } from "@/lib/getUser";
import React from "react";

const EditProfile = async () => {
  const users = await getUser();
  return (
    <div>
      <UpdateUser users={users} />
    </div>
  );
};

export default EditProfile;
