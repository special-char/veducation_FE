"use client";
import React, { use, useContext, useEffect } from "react";
import Icon from "../../../public/veducationIcon.svg";
import TitleIcon from "../../../public/VEDUCATION.svg";
import Cart from "../../../public/cart.svg";
import Bell from "../../../public/bell.svg";
import styles from "./header.module.css";
import Link from "next/link";
import AppContextProvider, {
  AppContext,
  useAppContext,
} from "@/context/AppContextProvider";
import { useCartProvider } from "@/context/CartContextProvider";
import { getCartItems } from "@/lib/getCartItems";
import { useSession } from "next-auth/react";
import { useRatingContext } from "@/context/RatingContext";
import { useRouter } from "next/navigation";

const Header = ({ data, users, ratings }) => {
  const {
    state: { notifications },
  } = useAppContext();

  const { initAdd, rateState } = useRatingContext();

  const navigate = useRouter();

  const sessionUser = useSession();

  const {
    cartInit,
    cartState: { cart },
  } = useCartProvider();
  // const user = users?.find(
  //   (item) => item.email === sessionUser?.data?.user?.email
  // );

  useEffect(() => {
    cartInit(data);
    initAdd(ratings);
    return () => {};
  }, []);

  return (
    <AppContextProvider>
      <nav className={styles.headerRoot}>
        <Link href="/" className={styles.headerRoot__title}>
          <Icon />
          <TitleIcon />
        </Link>
        <div className={styles.headerRoot__rightIcon}>
          <Link
            href={!sessionUser?.data?.user ? "" : "/cart?products"}
            onClick={() => {
              if (!sessionUser?.data?.user) {
                const response = confirm("Please sign in to continue");
                if (response) {
                  navigate.replace("/");
                }
              }
            }}
          >
            <Cart onClick={() => {}} />
          </Link>
          {cart.length !== 0 && sessionUser?.data?.user && (
            <span className={styles.headerRoot__rightIcon__floatNum}>
              {cart?.reduce((p, c) => p + c?.attributes?.quantity, 0)}
            </span>
          )}

          <Bell onClick={() => {}} />
          {notifications !== 0 && (
            <span className={styles.headerRoot__rightIcon__floatNum}>
              {notifications}
            </span>
          )}
        </div>
      </nav>
    </AppContextProvider>
  );
};

export default Header;
