"use client";
import PopupModal from "@/components/popupModal";
import { Formik, Field, Form, FastField } from "formik";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import FormikForm from "../FormikComponent/FormikForm";
import { InputFields, Sendinvitationint } from "./Field";

const InviteUs = ({ fields, ...prpos }) => {
  const [open, setOpen] = useState(false);
  function toggleModal() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <Button onClick={toggleModal} as={Link} href="">
        Details
      </Button>
      <PopupModal
        open={open}
        onClose={toggleModal}
        className="flex-1 flex flex-col gap-3 py-5 px-3"
      >
        <h4 className="text-sm text-background2">Invite Us</h4>
        <FormikForm
          fields={InputFields}
          initialValues={Sendinvitationint}
          // onSubmit={async (values, { setSubmitting }) => {
          //   try {
          //     const res = await signIn("credentials", {
          //       redirect: false,
          //       email: values.email,
          //       password: values.password,
          //       callbackUrl: "/",
          //     });
          //     toggleModal();
          //   } catch (error) {
          //     console.log(error);
          //   }
          // }}
        />
      </PopupModal>
    </div>
  );
};
export default InviteUs;
