import "./globals.css";
import React from "react";
import localFont from "@next/font/local";
import { Flow_Block } from "@next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar/navbar";

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

export default function RootLayout({ children }) {
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
        <main className="bg-background">
          <Header />
          {children}
          <Navbar />
        </main>
      </body>
    </html>
  );
}
