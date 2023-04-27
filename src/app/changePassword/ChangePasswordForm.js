"use client";

import React, { useState } from "react";
import { editPasswordFields, editProfileInitValue } from "./changePassword";
import FormikForm from "@/components/FormikComponent/FormikForm";
import { updatePassword } from "@/lib/updatePassword";
import { useSession } from "next-auth/react";
import SuccessModal from "@/components/SuccessModal";
import { useAppContext } from "@/context/AppContextProvider";

const ChangePasswordForm = () => {
  const session = useSession();

  const { dispatch } = useAppContext();

  async function onSubmit(values, { setFieldError }) {
    const res = await updatePassword(values, session?.data?.user?.accessToken);
    // console.log({ res });
    if (!res.jwt) {
      if (res?.error?.details?.errors) {
        res?.error?.details?.errors?.map((item) => {
          setFieldError(item.path[0], item.message);
        });
      } else {
        setFieldError("currentPassword", res?.error?.message);
      }
      return;
    }
    if (res.jwt) {
      dispatch({ success: true });
      // alert("success");
    }
  }

  return (
    <div>
      <SuccessModal
        title={"Password changes successfully"}
        btnText={"Go back to home"}
        href={"/"}
      />
      <FormikForm
        fields={editPasswordFields}
        initialValues={editProfileInitValue}
        onSubmit={onSubmit}
        // validate={(values) => {
        //   console.log({ values });
        //   if (values.changePassword !== values.confirmPassword) {
        //     console.log("login succesFully");
        //     return "Password doesnt match";
        //   }
        //   return "";
        //   // if (!value) return "Required...";
        // }}
      >
        {/* {error && <p>{error}</p>} */}
      </FormikForm>
    </div>
  );
};

export default ChangePasswordForm;
