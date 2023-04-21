"use client";
import { useCartProvider } from "@/context/CartContextProvider";
import { addBillingDetails } from "@/lib/getBillingDetails";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import FormikForm from "../../components/FormikComponent/FormikForm";
import { billingFields, billingInitValue } from "./Fields";

const BillingDetails = ({ user: users, ...props }) => {
  const userSession = useSession();
  const navigate = useRouter();
  const currentCartIds = props?.searchParams?.cartItems?.split(",");
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
            address,
            postcode,
            state,
            orderNote,
          }) => {
            const formValues = {
              name: `${name}`,
              lastname: `${lastname}`,
              email: `${email}`,
              phone: `${phone}`,
              address: `${address}`,
              postcode: `${postcode}`,
              state: `${state}`,
              orderNote: `${orderNote}`,
              user_id: `${user.id}`,
            };
            console.log(formValues, "checkkk");

            try {
              const response = await addBillingDetails(formValues);
              if (response.data) {
                navigate.push(`/orderconfirmed?cartItems=${currentCartIds}`);
                emptyCart(
                  cart.map((c) => c.id),
                  cart.map((c) => {
                    return {
                      id: c?.attributes?.product?.data?.id,
                      quantity: c?.attributes?.quantity,
                    };
                  })
                  // cart.map((c) => c.attributes.quantity)
                );

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
