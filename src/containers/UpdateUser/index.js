"use client";
import FormikForm from "@/components/FormikForm";
import React from "react";

import styles from "./editprofile.module.css";
import { updateEditUser } from "@/lib/updateEditUser";
import { useSession } from "next-auth/react";
import { editProfileFields, editProfileInitValue } from "./editProfileFields";
import { useRouter } from "next/router";
import { getUseredits } from "@/lib/getuseredits";
import { updateUser } from "@/lib/updateUser";

const UpdateUser = ({ users, userDetails, useredit }) => {
  const userSession = useSession();
  const user = users?.find(
    (item) => item.email === userSession?.data?.user?.email
  );

  const useriddata = useredit?.data?.find(
    (val) => val?.attributes?.user?.data?.id === user?.id
  );

  




  // console.log({ user, useriddata });

  return (
    <section className={styles.editprofile}>
      
      {user ? (
        <FormikForm
          fields={editProfileFields}
          initialValues={editProfileInitValue({
            ...user,
            ...useriddata.attributes,
          })}
          onSubmit={async (values) => {
            const { username, email, ...rest } = values;
            try {
              const response = await updateEditUser(useriddata?.id, rest);
              if (response.data.attributes?.user?.data?.id) {
                const res = await updateUser(
                  response.data.attributes?.user?.data?.id,
                  {
                    username: values.username,
                    email: values.email,
                  }
                );
              }
              
            } catch (error) {
              console.log(error);
            }
          }}
        />
      ) : (
        <p>Please SignIN!</p>
      )}
    </section>
  );
};

export default UpdateUser;

// password;
// phone;
// postcode;
// gender;
// userimg;
