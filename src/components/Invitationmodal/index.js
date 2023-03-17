"use client";
import PopupModal from "@/components/popupModal";
import { useAppContext } from "@/context/AppContextProvider";
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
          onSubmit={(e) => {
            toggleModal();
            dispatch({ success: true });
          }}
        />
      </PopupModal>
    </div>
  );
};
export default InviteUs;
