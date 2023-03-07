"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import PopupModal from "../popupModal";
import SuccessIcon from "public/icons/success.svg";
import { useAppContext } from "@/context/AppContextProvider";

const SuccessModal = ({ ...props }) => {
  const {
    state: { success },
    dispatch,
  } = useAppContext();
  function toggleModal() {
    dispatch({ success: false });
  }

  return (
    <div>
      <PopupModal
        open={success}
        onClose={toggleModal}
        className="flex-1 flex flex-col gap-10 py-5 px-3 items-center"
      >
        <div className="flex flex-col items-center">
          <SuccessIcon className="w-2/5" />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <Button className="w-full py-3" as={Link} href={props.href}>
          {props.btnText}
        </Button>
      </PopupModal>
    </div>
  );
};

export default SuccessModal;
