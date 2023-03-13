"use client";
import React from "react";
import { Formik, FastField, Form } from "formik";
import Button from "../Button";

const FormikForm = ({ fields, ...prpos }) => {
  return (
    <Formik {...prpos}>
      {() => (
        <Form className="flex flex-col gap-5">
          {fields.map((x) => (
            <FastField key={x.name} {...x} />
          ))}
          <Button
            as="button"
            type="submit"
            variant="primary"
            size="small"
            className={"w-full text-lg"}
          >
            Continue
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
