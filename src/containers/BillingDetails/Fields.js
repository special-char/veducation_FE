import Input from "@/components/InputComponent";
import SearchIcon from "public/icons/Search.svg";
import Dropdown from "../../components/DropDown Component/Dropdown";

export const billingInitValue = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  postcode: "",
  state: "",
  orderNote: "",
};

export const billingFields = [
  {
    component: Input,
    id: "name",
    label: "FIRST NAME",
    placeholder: "First Name",
    name: "name",
    className: "text-base",
    autoComplete: "irst name",
    type: "text",
    validate: (value) => {
      if (!value) return "Name is required";
      return "";
    },
  },

  {
    component: Input,
    id: "lastname",
    label: "LAST NAME",
    placeholder: "Last Name",
    name: "lastname",
    type: "text",
    className: "w-full mr-0 ",
    autoComplete: "last name",
    validate: (value) => {
      if (!value) return "Last name is required";
      return "";
    },
  },
  {
    component: Input,
    id: "email-address",
    label: "EMAIL",
    placeholder: "abc@gmail.com",
    name: "email",
    type: "email",
    className: "w-full mr-0 ",
    autoComplete: "email",
    validate: (value) => {
      if (!value) return "Email is required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return "Please Enter Valid Email";
      return "";
    },
  },
  {
    component: Input,
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
    component: Dropdown,
    id: "state",
    label: "STATE",
    placeholder: "Colors",
    placeholder: "state",
    options: [
      { id: 1, cou: "Gujarat" },
      { id: 2, cou: "Maharashtra" },
      { id: 2, cou: "MadhyaPradesh" },
      { id: 2, cou: "Goa" },
    ],
    name: "state",
    type: "text",
    autoComplete: "state",
    className: " w-full mr-0  ",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: Input,
    id: "address",
    label: "ADDRESS",
    placeholder: "179 Kaylie Crossroad",
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
    component: Input,
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
    component: Input,
    id: "orderNote",
    label: "ORDERNOTE",
    placeholder: "Special notes for delivery",
    name: "orderNote",
    type: "text",
    className: "w-full mr-0 ",
    autoComplete: "orderNote",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
];
