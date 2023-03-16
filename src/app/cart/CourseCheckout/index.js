"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
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
import { calculatePrice } from "@/utils/constants";
import { purchaseCourse } from "@/lib/purchaseCourse";

const CourseCheckout = ({
  users,
  course,
  promocodes: { data: promocodes },
}) => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useRouter();

  const [promocode, setPromocode] = useState({
    id: 0,
    attributes: { rate: "", amount: null },
  });

  const { addPurchaseItems } = usePurchaseContext();

  const handleSearch = () => {
    const currentCode = promocodes.find((p) => {
      return p?.attributes?.code === searchValue;
    });
    // setPromocode({

    // })
    if (!currentCode) {
      confirm("invalid promo code");
    }
    setPromocode(currentCode);
  };
  console.log({ promocode });

  const userSession = useSession();
  const user = users?.find(
    (item) => item.email === userSession?.data?.user?.email
  );
  const { emptyCart } = useCartProvider();

  async function checkout() {
    const response = await purchaseCourse(course?.data?.id, {
      isPurchased: true,
    });
    if (response?.data?.id) {
      navigate.push(`/orderconfirmed?courseItems=${response?.data?.id}`);
    }
    // console.log({ course });
  }

  const totalPrice = {
    total: course.data.attributes.price,
    withTax: course.data.attributes.price * 1.07,
  };
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

export default CourseCheckout;
