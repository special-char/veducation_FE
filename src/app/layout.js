import "./globals.css";
import React, { Suspense } from "react";
import localFont from "@next/font/local";
import { Flow_Block } from "@next/font/google";
import Header from "@/components/Header";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar/navbar";
import AppContextProvider from "@/context/AppContextProvider";
import AuthContext from "@/context/AuthContextProvider";
import axios from "axios";
import { CartContextProvider } from "@/context/CartContextProvider";
import { getCartItems } from "@/lib/updateCart";
import { getUser } from "@/lib/getUser";
import { RatingContextProvider } from "@/context/RatingContext";
import { getAllRatings, getRating } from "@/lib/getRatings";
import { PurchaseContextProvider } from "@/context/PurchasContextProvider";

const myFont = localFont({
  src: "../../public/fonts/sf-pro-display-regular-webfont.woff2",
  variable: "--font-SF-Display",
});

const flowBlock = Flow_Block({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-block",
  preload: true,
});

async function getSession(cookie) {
  try {
    const response = await axios.get(`http://localhost:3000/api/auth/session`, {
      headers: {
        cookie,
      },
    });
    return Object.keys(response.data).length > 0 ? response.data : null;
  } catch (error) {
    console.log(error);
  }
}

export default async function RootLayout({ children }) {
  const session = await getSession(headers().get("cookie") ?? "");
  const users = await getUser();
  const user = users?.find((item) => item?.email === session?.user?.email);
  const defaultCartItems = await getCartItems(user?.id);
  const ratings = await getAllRatings(user?.id);

  return (
    <html
      lang="en"
      className={`${myFont.variable} font-sans ${flowBlock.variable} font-cursive`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <AuthContext session={session}>
          <AppContextProvider user={user}>
            <RatingContextProvider>
              <CartContextProvider>
                <PurchaseContextProvider>
                  <Suspense fallback={<loading>loading....</loading>}>
                    <main className="bg-background md:px-container h-full scroll-pb-8">
                      <Header
                        {...defaultCartItems}
                        ratings={ratings}
                        session={session}
                        users={users}
                      />
                      {children}
                      <Navbar />
                    </main>
                  </Suspense>
                </PurchaseContextProvider>
              </CartContextProvider>
            </RatingContextProvider>
          </AppContextProvider>
        </AuthContext>
      </body>
    </html>
  );
}
