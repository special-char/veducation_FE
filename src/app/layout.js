import "./globals.css";
import React from "react";
import localFont from "@next/font/local";
import { Flow_Block } from "@next/font/google";
import Header from "@/components/Header";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar/navbar";
import ProductContextProvider from "@/context/ProductContextProvider";
import AuthContext from "@/context/AuthContextProvider";
import axios from "axios";
import HideScrollBar from "@/containers/HideScroll";

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

      <body style={{}}>
        <AuthContext session={session}>
          <ProductContextProvider>
            <HideScrollBar />

            <main className="bg-background md:px-container h-full">
              <Header />
              {children}
              <Navbar />
            </main>
          </ProductContextProvider>
        </AuthContext>
      </body>
    </html>
  );
}
