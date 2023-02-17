import Button from "@/components/Button";
import Modal from "@/components/Modal";
import React, { useState } from "react";
import Veducation from "public/VEDUCATION.svg";
import Icon from "public/veducationIcon.svg";
import Input from "@/components/InputComponent";
import Google from "public/icons/google.svg";
import Facebook from "public/icons/facebook.svg";
import Link from "next/link";

const Varification = () => {
  const [open, setOpen] = useState(false);
  function toggleModal() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <Button onClick={toggleModal} as={Link} href="">
        Open
      </Button>
      <Modal
        open={open}
        onClose={toggleModal}
        className=" flex-col gap-3 pt-3 px-3"
      >
        <span className="flex justify-center items-center py-5">
          <Icon />
          <Veducation />
        </span>
        <h4 className="font-bold text-background2">Enter OTP</h4>
        <div className="flex flex-col gap-5">
          <div className="relative">
            <p className="text-neutral-300 text-sm">
              Please enter OTP sent to 79xxxx340
            </p>
            <Input placeholder="OTP" className=" w-full relative" />
            <a href="http://" className="text-primary absolute top-9 right-3">
              Resend OTP
            </a>
          </div>
          <Button
            as={Link}
            href=""
            variant="primary"
            size="small"
            className={"w-full "}
          >
            Continue
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

export default Varification;
