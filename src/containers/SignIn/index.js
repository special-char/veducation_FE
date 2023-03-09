"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Veducation from "public/VEDUCATION.svg";
import Icon from "public/veducationIcon.svg";
import Input from "@/components/InputComponent";
import Google from "public/icons/google.svg";
import Facebook from "public/icons/facebook.svg";
import { AppContext } from "@/context/AppContextProvider";
import FormikForm from "@/components/FormikForm";
import { signInFields, signInInitValue } from "./signInFields";
import { signIn, signOut, useSession } from "next-auth/react";
import PopupModal from "@/components/popupModal";

const SignIn = () => {
  const handleSignupClick = () => {
    toggleModal();
    dispatch({ signUp: true });
  };
  const auth = useSession();
  const {
    state: { signIn: open, user },
    dispatch,
  } = useContext(AppContext);
  function toggleModal() {
    dispatch({ signIn: false });
  }
  if (!!auth?.data?.user) {
    return (
      <PopupModal
        open={open}
        onClose={toggleModal}
        className=" flex-[0.7] flex flex-col items-center justify-between p-6 "
      >
        <span className="flex  justify-center items-center">
          <Icon />
          <Veducation />
        </span>
        <h4>
          Help us spread <span className="text-primary">Dharma!</span>
        </h4>
        <button
          className="btn btn--primary w-full  py-3"
          onClick={() => {
            const res = confirm("Are you sure you want to signOut");
            if (res) {
              signOut();
            }
          }}
        >
          SignOut
        </button>
      </PopupModal>
    );
  }

  return (
    <Modal open={open} onClose={toggleModal} className="gap-3 pt-5 px-3 ">
      <span className="flex  justify-center items-center">
        <Icon />
        <Veducation />
      </span>
      <h4 className=" text-background2">Sign in</h4>
      <FormikForm
        fields={signInFields}
        initialValues={signInInitValue}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/",
          });
          toggleModal();
        }}
      />
      <div className="text-center flex justify-center items-center gap-3 py-4">
        <div className="w-16 h-[1px] bg-neutral-150"></div>
        <p className="small">Or continue with</p>
        <div className="w-16 h-[1px] bg-neutral-200"></div>
      </div>
      <div className="flex gap-2">
        <Button
          as={Link}
          href="https://466d-2401-4900-1f3f-9520-3d0f-c90c-cb1e-f60.in.ngrok.io/api/connect/google"
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
      <p className="text-center small ">
        Don't have an account ?
        <button onClick={handleSignupClick} className="text-primary pl-1">
          Sign Up
        </button>
      </p>
    </Modal>
  );
};

export default SignIn;
