"use client";
import PopupModal from "@/components/popupModal";
import { useAppContext } from "@/context/AppContextProvider";
import { sendInvitation } from "@/lib/sendInvitation";
import { Formik, Field, Form, FastField } from "formik";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import FormikForm from "../FormikComponent/FormikForm";
import SuccessModal from "../SuccessModal";
import { InputFields, Sendinvitationint } from "./Field";

const InviteUs = ({ fields, ...prpos }) => {
  const [open, setOpen] = useState(false);

  const {
    state: { inviteUs },
    dispatch,
  } = useAppContext();

  function toggleModal() {
    dispatch({ inviteUs: false });
  }

  return (
    <div>
      <SuccessModal
        title="Thanks for inviting"
        description="we will revert as soon as possible"
        btnText="Back to Home"
        href="/"
      />
      <PopupModal
        open={inviteUs}
        onClose={toggleModal}
        className="flex-1 flex flex-col gap-3 py-5 px-3"
      >
        <h4 className="font-bold text-background2">Invite Us</h4>
        <FormikForm
          fields={InputFields}
          initialValues={Sendinvitationint}
          onSubmit={async (values) => {
            const formValues = {
              name: values.name,
              email: values.email,
              phone: values.phone,
              invitationdetails: values.invitationdetails,
            };
            try {
              const res = await sendInvitation(formValues);
              if (res.ok) {
                dispatch({ error: null });
                toggleModal();
                return;
              }
              dispatch({ error: { message: "Invalid credentials" } });
              toggleModal();
              dispatch({ success: true });
            } catch (error) {
              console.log(error);
            }
          }}
          // onSubmit={async (values, { setSubmitting }) => {
          //   const res = await ("credentials", {
          //     redirect: false,
          //     email: values.email,
          //     password: values.password,
          //     callbackUrl: "/",
          //   });
          //   if (res.ok) {
          //     dispatch({ error: null });
          //     toggleModal();
          //     return;
          //   }
          //   dispatch({ error: { message: "Invalid credentials" } });
          //   // toggleModal();
          //   // dispatch({ success: true });
          // }}
        />
      </PopupModal>
    </div>
  );
};
export default InviteUs;
