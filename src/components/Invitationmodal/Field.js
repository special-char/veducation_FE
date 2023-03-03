import Input from "@/components/InputComponent";

export const Sendinvitationint = {
  name: "",
  email: "",
  phone: "",
  invitationdetails: "",
};

export const InputFields = [
  {
    component: Input,
    id: "name",
    name: "name",
    type: "text",
    autoComplete: "name",
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
    id: "phone",
    name: "phone",
    type: "number",
    autoComplete: "phone",
    label: "Phone",
    placeholder: "Please enter Phone",
    validate: (value) => {
      if (!value) {
        return "Please Enter Phone";
      }
      return "";
    },
  },
  // {
  //   component: Textarea,
  //   id: "Invitationdetails",
  //   name: "invitationdetails",
  //   type: "textarea",
  //   label: "Invitation Details",
  //   placeholder: "Please enter details..",
  //   validate: (value) => {
  //     if (!value) {
  //       return "Please Enter details";
  //     }
  //     return "";
  //   },
  // },
];
