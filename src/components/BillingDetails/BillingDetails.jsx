"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import Dropdown from "../DropDown Component/DropDown";
import FormikForm from "../FormikComponent/FormikForm";
import Input2 from "../input/InputComponent";

const fields = [
  {
    component: Input2,
    id: "firstname",
    label: "FIRST NAME",
    placeholder: "Tam",
    name: "firstname",
    className: "w-full mr-0 text-sm p-0",
    autoComplete: "irst name",
    type: "text",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },

  {
    component: Input2,
    id: "lastname",
    label: "LAST NAME",
    placeholder: "Firsr name",
    name: "lastname",
    type: "text",
    className: "w-full mr-0 ",
    autoComplete: "last name",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: Input2,
    id: "email-address",
    label: "EMAIL",
    placeholder: "tam@uf.net",
    name: "email",
    type: "email",
    className: "w-full mr-0 ",
    autoComplete: "email",
    validate: (value) => {
      if (!value) return "Required...";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return "Please Enter Valid Email";
      return "";
    },
  },
  {
    component: Input2,
    id: "phone",
    label: "PHONE",
    placeholder: "232-085-5458",
    name: "phone",
    type: "number",
    className: "w-full mr-0 ",
    autoComplete: "phone",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: Input2,
    id: "street",
    label: "STREET",
    placeholder: "179 Kaylie Crossroad",
    name: "street",
    type: "text",
    className: "w-full mr-0 ",
    autoComplete: "address",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: Input2,
    id: "postcode",
    label: "POSTCODE",
    placeholder: "+800000",
    name: "postcode",
    type: "number",
    className: "w-full mr-0 ",
    autoComplete: "postcode",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: Dropdown,
    id: "country",
    label: "Country",
    placeholder: "Colors",
    placeholder: "Country",
    options: [
      { id: 1, cou: "Ind" },
      { id: 2, cou: "Aus" },
      { id: 2, cou: "USA" },
      { id: 2, cou: "UK" },
    ],
    name: "country",
    type: "text",
    autoComplete: "country",
    className: " w-full mr-0  ",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },

  {
    component: Input2,
    id: "city",
    label: "CITY",
    placeholder: "Soutn Mathiasmouth",
    name: "city",
    type: "text",
    className: "w-full mr-0 ",
    autoComplete: "city",

    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: Input2,
    id: "ordernote",
    label: "ORDERNOTE",
    placeholder: "Special notes for delivery",
    name: "ordernote",
    type: "text",
    className: "w-full mr-0 ",
    autoComplete: "ordernote",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
];

const onSubmit = (values) => {
  console.log("Form data", values);
};

const BillingDetails = () => {
  return (
    <div className="px-container ">
      <p className="text-2xl font-bold text-neutral-950 my-6">
        Shipping Details
      </p>
      <div>
        <FormikForm
          onsubmit={onSubmit}
          fields={fields}
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            street: "",
            country: "",
            city: "",
            ordernote: "",
          }}
        />
      </div>
    </div>
  );
};

export default BillingDetails;
