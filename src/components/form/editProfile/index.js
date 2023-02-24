"use client"
import Button from "@/components/Button";
import Dropdown from "@/components/DropDownComponent/Dropdown";
import FormikForm from "@/components/FormikComponent/FormikForm";
import Input2 from "@/components/input/InputComponent";
import Input from "@/components/InputComponent";
import Image from "next/image";
import Link from "next/link";
import profile from "public/icons/profile.png";
import Profile2 from "public/icons/profile2.svg";
import Styles from "./editProfile.module.css";

const fields = [
  {
    component: Input2,
    id: "first name",
    label: "FIRST NAME",
    name: "firstname",
    className: "w-full mr-0 ",
    autoComplete: "irst name",
    type: "text",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },

  {
    component: Input2,
    id: "last name",
    label: "LAST NAME",
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
    id: "address",
    label: "STREET",
    name: "address",
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
    name: "city",
    type: "text",
    className: "w-full mr-0 ",
    autoComplete: "city",

    
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
 
];

const EditProfile = () => {
  return (
    <div className={Styles.profile}>
      <h6 className={Styles.profile__title}>Edit profile Info</h6>
      <div className={Styles.profile__image}>
        <Image src={profile} alt='image' />
        <Profile2 className={Styles.profile__icon} />
      </div>
      <FormikForm 
        
          fields={fields}
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            street: "",
            country: "",
            city: "",
            
          }}
          
        />
      
    </div>
  );
};

export default EditProfile;
