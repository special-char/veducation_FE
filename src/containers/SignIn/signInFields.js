import Input from "@/components/InputComponent";
import Hidden from "public/icons/passwordHidden.svg";
import Shown from "public/icons/passwordShown.svg";

export const signInInitValue = {
  email: "",
  password: "",
};

export const signInFields = [
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
    icon: () => <Hidden height={18} width={18} />,
    shown: () => <Shown height={18} width={18} />,
    validate: (value) => {
      if (!value) {
        return "Please Enter Password";
      }
      return "";
    },
  },
];
