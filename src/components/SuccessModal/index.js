"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import PopupModal from "../popupModal";
import SuccessIcon from "public/icons/success.svg";

const SuccessModal = ({ ...props }) => {
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
