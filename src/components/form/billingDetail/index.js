import Button from "@/components/Button";
import Input from "@/components/InputComponent";
import Link from "next/link";
import Styles from "./billingDetail.module.css";

const data = [
  {
    type: "text",
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
  {
    type: "text",
    id: "ordernote",
    name: "ordernote",
    autoComplete: "ordernote",
    label: "ORDER NOTE",
    placeholder: "Special notes for delivery",
  },
];

const BillingDetail = () => {
  return (
    <div className={Styles.detail}>
      <h5 className={Styles.detail__title}>Shipping Details</h5>

      <form className={Styles.detail__form}>
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

export default BillingDetail;
