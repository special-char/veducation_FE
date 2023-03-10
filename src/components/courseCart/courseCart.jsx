"use client";
import React, { useState } from "react";
import styles from "./courseCart.module.css";
import Send from "public/send.svg";
import Promo from "public/promoCode.svg";
import Button from "@/components/Button";
import Link from "next/link";
import Input from "@/components/InputComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCartProvider } from "@/context/CartContextProvider";
import { addPurchase } from "@/lib/getPurchase";
import { usePurchaseContext } from "@/context/PurchasContextProvider";

const data = {
  orderPrice: "75",
  totalAmount: "95",
};

const CourseCart = ({ users, data: { data } }) => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useRouter();

  const { addPurchaseItems } = usePurchaseContext();

  const handleSearch = () => {
    setSearchValue("");
  };

  const userSession = useSession();
  const user = users?.find(
    (item) => item.email === userSession?.data?.user?.email
  );
  const {
    cartState: { cart },
    emptyCart,
  } = useCartProvider();

  function calculatePrice(cartItems, rate = 0.7) {
    const t = cartItems?.reduce((p, c) => {
      return (
        p +
        c?.attributes?.product?.data?.attributes?.price * c.attributes.quantity
      );
    }, 0);
    return { total: t, withTax: (t * rate).toFixed(2) };
  }

  const totalPrice = calculatePrice(cart, 1.12);
  const shippingDetail = data?.find((shipping) => {
    return shipping?.attributes?.user_id?.data?.id === user?.id;
  });

  console.log({ cart: cart.map((c) => `${c.id}`) });

  async function checkout() {
    try {
      const response = await addPurchase({
        cartId: cart.map((c) => c.id),
        user: user?.id,
      });
      if (response.data) {
        console.log({ purchase: response?.data?.attributes?.cartId?.data });
        if (shippingDetail) {
          addPurchaseItems(cart);
          navigate.push(`/orderconfirmed?cartItems=${cart.map((c) => c.id)}`);
          emptyCart(cart.map((c) => c.id));
          return;
        }
        addPurchaseItems(cart);
        navigate.push("/billingdetails");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.main__textbox}>
        <div>
          <Input
            type="text"
            field={{ name: "search", error: "search" }}
            form={{ touched: {}, errors: {} }}
            placeholder="Enter your promoCode"
            value={searchValue}
            onChange={(x) => setSearchValue(x.target.value)}
            className={"px-9"}
          />

          <Promo className={styles.main__promo} />
        </div>
        <div className={styles.main__btndiv}>
          <button className={styles.main_sendbtn} onClick={handleSearch}>
            <Send />
          </button>
        </div>
      </div>
      <div className={styles.main__orderDetail}>
        <div className={styles.main__order}>
          <h6 className={styles.main__orderData}>Order:</h6>
          <h6 className={styles.main__orderData}>${totalPrice.total}</h6>
        </div>

        <div className={styles.main__total}>
          <h3 className={styles.main__orderData}>Total:</h3>
          <h3>${totalPrice.withTax}</h3>
        </div>
      </div>

      <div>
        <Button
          as={"button"}
          // href={shippingDetail ? "/orderconfirmed" : "/billingdetails"}
          onClick={checkout}
          variant="primary"
          className="w-full p-3"
          size={"large"}
        >
          Check out
        </Button>
      </div>
    </div>
  );
};

export default CourseCart;
