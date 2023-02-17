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
      <Modal
        open={open}
        onClose={toggleModal}
        className="flex-1 flex flex-col gap-3 pt-3 px-3"
      >
        <span className="flex justify-center items-center">
          <Icon />
          <Veducation />
        </span>
        <h4 className=" text-background2">Sign in</h4>
        <div className="flex flex-col gap-5">
          <Input
            label="Email/Phone"
            placeholder="Enter Mobile Number"
            className="p-2 border border-primary3 w-full"
          />
          <Button
            as={Link}
            href=""
            variant="primary"
            size="small"
            className={"w-full py-2"}
          >
            Continue
          </Button>
        </div>
        <div className="text-center flex justify-center items-center gap-3 py-4">
          <div className="w-16 h-[1px] bg-neutral-150"></div>
          <p className="small">Or continue with</p>
          <div className="w-16 h-[1px] bg-neutral-200"></div>
        </div>
        <div className="flex gap-2">
          <Button
            as={Link}
            href=""
            variant="secondary2"
            size="small"
            className={
              "w-full py-2 border border-[#F5D9B1] flex items-center justify-center gap-2"
            }
          >
            <Google />
            Google
          </Button>
          <Button
            as={Link}
            href=""
            variant="secondary2"
            size="small"
            className={
              "w-full border border-[#F5D9B1] py-2 flex items-center justify-center gap-2"
            }
          >
            <Facebook />
            Facebook
          </Button>
        </div>
        <p className="text-center small">
          Already have an account?
          <a className="text-primary" href="http://">
            Login
          </a>
        </p>
      </Modal>
    </div>
  );
};

export default SignIn;
