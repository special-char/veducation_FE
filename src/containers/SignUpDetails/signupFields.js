import Checkbox from "@/components/CheckBox";
import Input from "@/components/InputComponent";
import SearchIcon from "public/icons/Search.svg";

export const signupInitValue = {
  email: "",
  password: "",
  gender: [],
};

export const signupFields = [
  {
    component: Checkbox,

    label: "Gender",
    options: [
      {
        id: "male",
        text: "Male",
      },
      {
        id: "female",
        text: "Female",
      },
    ],
    name: "gender",
  },
  {
    component: Input,
    id: "name",
    name: "name",
    type: "text",
    autoComplete: "text",
    label: "Name",
    placeholder: "Please enter name..",
    validate: (value) => {
      if (!value) {
        return "Please Enter Name";
      }
      return "";
    },
  },
  {
    component: Input,
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    label: "Email",
    placeholder: "Please enter email..",
    validate: (value) => {
      if (!value) {
        return "Please Enter Email";
      }
      return "";
    },
  },
  {
    component: Input,
    id: "password",
    name: "password",
    type: "password",
    label: "Password",
    autoComplete: "current-password",
    placeholder: "Please enter Password..",
    // icon: () => <SearchIcon height={24} width={24} />,
    validate: (value) => {
      if (!value) {
        return "Please Enter Password";
      }
      return "";
    },
  },
];
