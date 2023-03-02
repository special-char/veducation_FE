"use client";
import FormikForm from "@/components/FormikForm";
import { Field } from "formik";
import React, { useRef } from "react";
import { editProfileFields, editProfileInitValue } from "./editProfileFields";
import Edit from "public/icons/editprofile.svg";
import Image from "next/image";
import styles from "./editprofile.module.css";

const EditProfile = () => {
  const hiddenFileInput = useRef(null);

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      const body = new FormData();
      body.append("image", i);
      console.log({ i });
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <section className={styles.editprofile}>
      <div className="pb-4">
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          accept="image/*"
          style={{ display: "none" }}
        />
        <div
          className="relative aspect-image max-h-[170px]"
          onClick={handleClick}
        >
          <Image
            fill
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className=" rounded-lg "
          />
          <Edit className="w-12 absolute -bottom-3 -right-3" />
        </div>
      </div>
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
