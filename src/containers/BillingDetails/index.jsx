"use client";
import { useCartProvider } from "@/context/CartContextProvider";
import { addBillingDetails } from "@/lib/getBillingDetails";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import FormikForm from "../../components/FormikComponent/FormikForm";
import { billingFields, billingInitValue } from "./Fields";

const BillingDetails = ({ user: users }) => {
  const userSession = useSession();
  const navigate = useRouter();
  const {
    cartState: { cart },
    emptyCart,
  } = useCartProvider();
  const user = users?.find(
    (item) => item.email === userSession?.data?.user?.email
  );
  return (
    <div className="px-container ">
      <p className="text-2xl font-bold text-neutral-950 my-6">
        Shipping Details
      </p>
      <div>
        <FormikForm
          fields={billingFields}
          initialValues={billingInitValue}
          onSubmit={async ({
            name,
            lastname,
            email,
            phone,
            street,
            postcode,
            country,
            city,
            orderNote,
          }) => {
            const formValues = {
              name: `${name}`,
              lastname: `${lastname}`,
              email: `${email}`,
              phone: `${phone}`,
              street: `${street}`,
              postcode: `${postcode}`,
              country: `${country}`,
              city: `${city}`,
              orderNote: `${orderNote}`,
              user_id: `${user.id}`,
            };
            try {
              const response = await addBillingDetails(formValues);
              if (response.data) {
                navigate.push("/orderconfirmed");
                emptyCart(cart.map((c) => c.id));
              }
            } catch (error) {
              console.log(error, "addBillingDetails");
            }
          }}
        />
      </div>
    </div>
  );
};

export default BillingDetails;
