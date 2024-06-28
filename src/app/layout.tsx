import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";
const karla = Karla({
  weight: ["200", "300", "400", "500","600", "700","800"],
  subsets:['latin'],
  variable:"--font-karla"
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HIAT",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
