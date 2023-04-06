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
import { purchaseCourse, updateCourse } from "@/lib/purchaseCourse";
import { useAppContext } from "@/context/AppContextProvider";
import SuccessModal from "@/components/SuccessModal";

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

  const { dispatch } = useAppContext();

  const handleSearch = () => {
    const currentCode = promocodes.find((p) => {
      return p?.attributes?.code === searchValue;
    });

    if (!currentCode) {
      confirm("invalid promo code");
    }
    setPromocode(currentCode);
  };


  const userSession = useSession();
  const user = users?.find(
    (item) => item.email === userSession?.data?.user?.email
  );
  const { emptyCart } = useCartProvider();

  async function checkout() {
    const res = await purchaseCourse(course?.data?.id, {
      course: course?.data?.id,
      user: user?.id,
    });
    if (res.data.id) {
      const response = await updateCourse(course?.data?.id, {
        isPurchased: true,
        user_id: user?.id,
      });
      if (response?.data?.id) {
        // navigate.push(`/orderconfirmed?courseItems=${response?.data?.id}`);
        dispatch({ success: true });
      }
    }
  }

  const totalPrice = {
    total: course.data.attributes.price,
    withTax: course.data.attributes.price * 1.07,
  };
  return (
    <div className={styles.main}>
      <SuccessModal
        btnText={"Start Session"}
        title={"Enrolled Successfully"}
        description="You successfully enrolled in the course"
        href={"/courses/your-course"}
      />
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
          <h3>${totalPrice.withTax.toFixed(2)}</h3>
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
