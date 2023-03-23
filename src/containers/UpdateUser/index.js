"use client";
import FormikForm from "@/components/FormikForm";
import React from "react";

import styles from "./editprofile.module.css";
import { updateUser } from "@/lib/updateUser";
import { useSession } from "next-auth/react";
import { editProfileFields, editProfileInitValue } from "./editProfileFields";

const UpdateUser = ({ users, userDetails }) => {
  const userSession = useSession();
  const user = users?.find(
    (item) => item.email === userSession?.data?.user?.email
  );
  return (
    <section className={styles.editprofile}>
      <FormikForm
        fields={editProfileFields}
        initialValues={editProfileInitValue}
        onSubmit={async (values) => {
          const formValues = {
            profileimage: values.file,
            gender: values.gender,
            username: values.username,
            email: values.email,
            phone: values.phone,
            street: values.street,
            postcode: values.postcode,
            country: values.country,
            city: values.city,
          };
          try {
            const response = await updateUser(user.id, formValues);
            console.log(values);
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </section>
  );
};

export default UpdateUser;
