"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Veducation from "public/VEDUCATION.svg";
import Icon from "public/veducationIcon.svg";
import FormikForm from "@/components/FormikForm";
import { signupFields, signupInitValue } from "./signupFields";
import styles from "./signup.module.css";
import { AppContext } from "@/context/AppContextProvider";
import { authSignup } from "@/lib/authSignup";
import { addUser } from "@/lib/addUser";

const SignUpDetails = () => {
  function toggleModal() {
    dispatch({ signUp: false });
  }

  const {
    state: { signUp },
    dispatch,
  } = useContext(AppContext);

  return (
    <div className={styles.signup}>
      <Modal open={signUp} onClose={toggleModal} className=" gap-3 py-5 px-3">
        <span className="flex justify-center items-center">
          <Icon />
          <Veducation />
        </span>
        <h4 className=" text-background2">Fill Your Details</h4>
        <div className="flex flex-col gap-5">
          <FormikForm
            fields={signupFields}
            initialValues={signupInitValue}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const res = await authSignup({
                  username: values.username,
                  email: values.email,
                  password: values.password,
                });
                // console.log("authSignup res:", res);
                if (res.user) {
                  // console.log("user:", res.user);
                  // console.log("res.user:", res.user.id);
                  // api call
                  // console.log("SignUpDetails:", res.user);
                  const data = await addUser(res?.user?.id);
                  // console.log("addUser:", data);
                  dispatch({ signIn: true });
                  toggleModal();
                  return;
                }
                dispatch({ error: { message: "Invalid credentials" } });
                // console.log("authSignup:", res);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <p className="text-center small py-2">
              By Signing in , I agree to
              <a className="underline pl-2" href="#">
                Terms & Condition
              </a>
            </p>
          </FormikForm>
        </div>
      </Modal>
    </div>
  );
};

export default SignUpDetails;
