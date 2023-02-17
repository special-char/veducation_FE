import Button from "@/components/Button";
import { Dropdown } from "@/components/dropdown/dropdown";
import Input from "@/components/InputComponent";
import Image from "next/image";
import Link from "next/link";
import profile from "public/icons/profile.png";
import Profile2 from "public/icons/profile2.svg";
import Styles from "./editProfile.module.css";

const data = [
  {
    component: Input,
    id: "name",
    name: "name",
    autoComplete: "given-name",
    label: "FIRST NAME",
    placeholder: "First Name",
  },
  {
    type: "text",
    id: "name",
    name: "name",
    autoComplete: "family-name",
    label: "LAST NAME",
    placeholder: "Last Name",
  },
  {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email address",
    label: "EMAIL",
  },
  {
    type: "text",
    id: "phone",
    name: "phone",
    autoComplete: "tel",
    label: "PHONE",
    placeholder: "Phone Number",
  },
  {
    type: "text",
    id: "street",
    name: "street",
    autoComplete: "street-address",
    label: "STREET",
    placeholder: "Street",
  },
  {
    type: "text",
    id: "postcode",
    name: "postcode",
    autoComplete: "postal-code",
    label: "POSTCODE",
    placeholder: "Postcode",
  },
  {
    type: "text",
    id: "country",
    name: "country",
    autoComplete: "country-name",
    label: "COUNTRY",
    placeholder: "Country",
  },

  {
    type: "text",
    id: "city",
    name: "city",
    autoComplete: "address-level2",
    label: "CITY",
    placeholder: "City",
  },
];

const EditProfile = () => {
  return (
    <div className={Styles.profile}>
      <h6 className={Styles.profile__title}>Edit profile Info</h6>
      <div className={Styles.profile__image}>
        <Image src={profile} />
        <Profile2 className={Styles.profile__icon} />
      </div>
      <form className={Styles.profile__form}>
        {data.map((detail) => (
          <Input
            key={detail.id}
            placeholder={detail.placeholder}
            label={detail.label}
            type={detail.type}
            id={detail.id}
            name={detail.name}
            autoComplete={detail.autoComplete}
          />
        ))}
      </form>
      <Button as={Link} href="" variant="primary" size="small">
        Continue to payment
      </Button>
    </div>
  );
};

export default EditProfile;
