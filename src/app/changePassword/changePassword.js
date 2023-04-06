import Input from "@/components/InputComponent";

export const editProfileInitValue = {
  password: "",
  currentPassword: "",
  passwordConfirmation: "",
};

export const editPasswordFields = [
  {
    component: Input,
    id: "currentPassword",
    label: "Current Password",
    name: "currentPassword",
    type: "password",
    className: "w-full mr-0 ",
    autoComplete: "currentPassword",
    onchange: "currentPassword",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: Input,
    id: "password",
    label: "Change Password",
    name: "password",
    type: "password",
    className: "w-full mr-0 ",
    autoComplete: "password",
    onchange: "password",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
  {
    component: Input,
    id: "passwordConfirmation",
    label: "Confirm Password",
    name: "passwordConfirmation",
    type: "password",
    className: "w-full mr-0 ",
    autoComplete: "passwordConfirmation",
    onchange: "passwordConfirmation",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
];
