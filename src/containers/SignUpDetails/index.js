"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Veducation from "public/VEDUCATION.svg";
import Icon from "public/veducationIcon.svg";
import FormikForm from "@/components/FormikForm";
import { signupFields, signupInitValue } from "./signupFields";
import styles from "./signup.module.css";
import { ProductContext } from "@/context/ProductContextProvider";

const SignUpDetails = () => {
  function toggleModal() {
    dispatch({ signUp: false });
  }

  const {
    state: { signUp },
    dispatch,
  } = useContext(ProductContext);

  return (
    <div className={styles.signup}>
      <Modal
        open={signUp}
        onClose={toggleModal}
        className=" flex-col gap-3 py-5 px-3 pb-14"
      >
        <span className="flex justify-center items-center">
          <Icon />
          <Veducation />
        </span>
        <h4 className=" text-background2">Fill Your Details</h4>
        <div className="flex flex-col gap-5">
          <FormikForm
            fields={signupFields}
            initialValues={signupInitValue}
            onSubmit={(values, { setSubmitting }) => {
              try {
                console.log(values);
              } catch (error) {
                console.log(error);
              }
            }}
          />
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
