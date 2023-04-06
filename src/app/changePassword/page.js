import FormikForm from "@/components/FormikForm";
import Input from "@/components/InputComponent";
import React from "react";
import { editPasswordFields, editProfileInitValue } from "./changePassword";
import { updateUser } from "@/lib/updateEditUser";
import { updatePassword } from "@/lib/updatePassword";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = async () => {
  // const changePassword = await updatePassword();

  return (
    <section className="px-container pt-3">
      <div>
        <ChangePasswordForm />
      </div>
    </section>
  );
};

export default ChangePassword;
