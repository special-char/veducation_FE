import Checkbox from "@/components/CheckBox";
import Dropdown from "@/components/DropDown Component/Dropdown";
import Input from "@/components/InputComponent";
import UploadImage from "@/components/UploadImage";

export const editProfileInitValue = (props) => {
  // console.log({ props });
  return {
    profileimage: null,
    username: props.username ?? "",
    email: props.email ?? "",
    phone: props.phone ?? "",
    address: props.address ?? "",
    postcode: props.postcode ?? "",
    state: props.state ?? "",
    gender: props.gender ?? "",
  };
};

// email
// :
// "user@gmail.com"
// password
// :
// "user@123"
// username
// :
// "user"

export const editProfileFields = [
  {
    component: UploadImage,
    id: "profileimage",
    name: "profileimage",
    className: "",
    type: "file",
    validate: (value) => {
      if (!value) return "Required...";
      return "";
    },
  },
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
    label: "NAME",
    placeholder: "Full Name",
    name: "username",
    className: "w-full mr-0 text-sm p-0",
    autoComplete: "name",
    type: "text",
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
    component: Dropdown,
    id: "state",
    label: "STATE",
    placeholder: "Colors",
    placeholder: "STATE",
    options: [
      { id: 1, cou: "Gujarat" },
      { id: 2, cou: "Maharashtra" },
      { id: 2, cou: "Madhya Pradesh" },
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
];
