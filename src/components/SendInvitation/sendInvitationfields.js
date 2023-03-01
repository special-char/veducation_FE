import Input from "@/components/InputComponent";
import SearchIcon from "public/icons/Search.svg";
import Textarea from "../InputComponent/textarea";

export const SendInvitationIntFields = {
  name: "",
  email: "",
  phone: "",
  invitationDetails: "",
};

export const SendInvitationFields = [
  {
    component: Input,
    id: "name",
    name: "name",
    type: "text",
    autoComplete: "name",
    label: "Name",
    placeholder: "Please enter your name..",
    validate: (value) => {
      if (!value) {
        return "Please Enter name";
      }
      return "";
    },
  },
  {
    component: Input,
    id: "signup-email",
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
    placeholder: "Please enter Phone..",
    validate: (value) => {
      if (!value) {
        return "Please Enter Phone";
      }
      return "";
    },
  },
  {
    component: Textarea,
    id: "InvitaionDetails",
    name: "invitationDetails",
    type: "text",
    label: "Invitation Details",
    
    placeholder: "Please enter details..",
    // icon: () => <SearchIcon height={24} width={24} />,
    validate: (value) => {
      if (!value) {
        return "Please Enter details";
      }
      return "";
    },
  },
];
