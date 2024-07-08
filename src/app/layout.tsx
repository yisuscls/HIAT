import type { Metadata } from "next";
import Head from 'next/head';
import {  Karla } from "next/font/google";
import "../css/globals.css";
const karla = Karla({
  weight: ["200", "300", "400", "500","600", "700","800"],
  subsets:['latin'],
  variable:"--font-karla"
});


export const metadata: Metadata = {
  title: "HIAT",
  description: "Hyperspectral image Analysis ToolBox",
  icons: {
    icon: "/Tarzan.png",
  },
};

export default function RootLayout({
  children,}: Readonly<{
                  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        {children}
      </body>
    </html>
  );
}
