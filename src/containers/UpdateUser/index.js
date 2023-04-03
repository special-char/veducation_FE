"use client";
import FormikForm from "@/components/FormikForm";
import React from "react";

import styles from "./editprofile.module.css";
import { updateUser } from "@/lib/updateUser";
import { useSession } from "next-auth/react";
import { editProfileFields, editProfileInitValue } from "./editProfileFields";
import { useRouter } from "next/router";
import { getUseredits } from "@/lib/getuseredits";

const UpdateUser = ({ users, userDetails, useredit }) => {
  const userSession = useSession();
  const user = users?.find(
    (item) => item.email === userSession?.data?.user?.email
  );

  // console.log("user:", user);
  // console.log(
  //   "useredit:",
  //   useredit?.data?.find(
  //     (val) => val?.attributes?.users_permissions_user?.data?.id === user?.id
  //   )
  // );
  const useriddata = useredit?.data?.find(
    (val) => val?.attributes?.users_permissions_user?.data?.id === user?.id
  );
  // console.log("edit user id:", useriddata.id);
  return (
    <section className={styles.editprofile}>
      {user ? (
        <FormikForm
          fields={editProfileFields}
          initialValues={editProfileInitValue}
          onSubmit={async (values) => {
            const formValues = {
              // users_permissions_user: user?.id,
              name: user.username,
              email: user.email,
              profileimage: values.file,
              gender: values.gender,
              // username: values.username,
              phone: values.phone,
              street: values.street,
              postcode: values.postcode,
              country: values.country,
              city: values.city,
            };
            try {
              const response = await updateUser(useriddata, formValues);
              console.log(values);
              console.log("response:", response);
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
