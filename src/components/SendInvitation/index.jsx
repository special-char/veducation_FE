"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Link from "next/link";
import React, { useState } from "react";
import Veducation from "public/VEDUCATION.svg";
import Icon from "public/veducationIcon.svg";
import Input from "@/components/InputComponent";
import Google from "public/icons/google.svg";
import Facebook from "public/icons/facebook.svg";
import PopupModal from "../popupModal";

import {
  SendInvitationFields,
  SendInvitationIntFields,
} from "./sendInvitationfields";

import FormikForm from "@/components/FormikForm";
const InviteUs = () => {
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
        <h4 className=" text-background2 text-sm">Invite Us</h4>

        <FormikForm
          fields={SendInvitationFields}
          initialValues={SendInvitationIntFields}
          btnText="Send Invitation"
          onSubmit={async({values}) => {
            try {
              console.log(values);
            } catch (error) {
              
            }
          }}
        />
      </PopupModal>
    </div>
  );
};

export default InviteUs;
