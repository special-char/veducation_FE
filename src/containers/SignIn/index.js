"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Link from "next/link";
import React, { useState } from "react";

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
      <Modal open={open} onClose={toggleModal}>
        SignIn
      </Modal>
    </div>
  );
};

export default SignIn;
