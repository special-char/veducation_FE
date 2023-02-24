import Input from "@/components/InputComponent";

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
    validate: (value) => {
      if (!value) {
        return "Please Enter Password";
      }
      return "";
    },
  },
];
