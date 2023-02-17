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

const SignUpDetails = () => {
  const [open, setOpen] = useState(false);
  function toggleModal() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <Button onClick={toggleModal} as={Link} href="">
        Details
      </Button>
      <Modal
        open={open}
        onClose={toggleModal}
        className="flex-1 flex flex-col gap-3 py-5 px-3"
      >
        <span className="flex justify-center items-center">
          <Icon />
          <Veducation />
        </span>
        <h4 className=" text-background2">Fill Your Details</h4>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-neutral-300 text-sm">Name</p>
            <Input
              // label="Email/Phone"
              placeholder="Enter Your Name"
              className="w-full"
            />
          </div>
          <div>
            <p className="text-neutral-300 text-sm">Email/Phone</p>
            <Input
              // label="Email/Phone"
              placeholder="Enter Your Email"
              className="w-full"
            />
          </div>
          <div>
            <p className="text-neutral-300 text-sm">Email/Phone</p>
            <Input
              // label="Email/Phone"
              placeholder="Enter Your password"
              className="w-full"
            />
          </div>
          <Button
            as={Link}
            href=""
            variant="primary"
            size="small"
            className={"w-full"}
          >
            Send OTP
          </Button>
        </div>

        <p className="text-center small pt-4">
          By Signing in , I agree to
          <a className="underline pl-2" href="http://">
            Terms & Condition
          </a>
        </p>
      </Modal>
    </div>
  );
};

export default SignUpDetails;
