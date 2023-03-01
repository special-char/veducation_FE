"use client";
import { Field, Form, Formik } from "formik";
import React from "react";

const FormikForm = ({ btnText, fields, children, ...rest }) => {
  return (
    <Formik
      {...rest}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors }) => (
        <Form className="">
          {/* <input type="hidden" name="remember" defaultValue="true"  /> */}
          {errors.serverError && <p className="">{errors.serverError}</p>}
          <div className="flex flex-col gap-4">
            {fields.map((x) => (
              <Field key={x.id} {...x} />
            ))}
          </div>

          {children}

          <div>
            <button type="submit" className="btn btn--primary w-full py-4 my-5">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
