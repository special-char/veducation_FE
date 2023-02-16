"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Link from "next/link";
import React, { useState } from "react";
import Veducation from "public/VEDUCATION.svg";
import Icon from "public/veducationIcon.svg";
import Input from "@/components/InputComponent";
const SignIn = () => {
  const [open, setOpen] = useState(false);
  function toggleModal() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <Button onClick={toggleModal} as={Link} href="">
        Open
      </Button>
      <Modal open={open} onClose={toggleModal} className="flex-1 pt-3 px-3">
        <span className="flex justify-center items-center">
          <Icon />
          <Veducation />
        </span>
        <p className="text-[23px] font-bold text-background2">Sign In</p>
        <Input label="name" />
      </Modal>
    </div>
  );
};

export default SignIn;
