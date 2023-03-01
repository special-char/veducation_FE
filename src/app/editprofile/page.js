"use client";
import FormikForm from "@/components/FormikForm";
import { Field } from "formik";
import React from "react";
import { editProfileFields, editProfileInitValue } from "./editProfileFields";

const EditProfile = () => {
  return (
    <section className="pb-24">
      <FormikForm
        fields={editProfileFields}
        initialValues={editProfileInitValue}
        onSubmit={(values) => {
          try {
            console.log(values);
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </section>
  );
};

export default EditProfile;
