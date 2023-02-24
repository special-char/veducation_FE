import "./globals.css";
import React from "react";
import localFont from "@next/font/local";
import { Flow_Block } from "@next/font/google";
import Header from "@/components/Header";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar/navbar";
import ProductContextProvider from "@/context/ProductContextProvider";
import AuthContext from "@/context/AuthContextProvider";

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
  const response = await fetch(`/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
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

      <body>
        <AuthContext session={session}>
          <ProductContextProvider>
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
