import Dropdown from "@/components/DropDown Component/Dropdown";
import Input from "@/components/InputComponent";

export const editProfileInitValue = {
  file: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  street: "",
  phone: "",
  street: "",
  postcode: "",
  country: "",
  city: "",
  ordernote: "",
};

export const editProfileFields = [
  {
    component: Input,
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
    component: Input,
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
    component: Input,
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
    component: Input,
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
    component: Input,
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
];
