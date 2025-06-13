import Header from "@/components/header";
import type { Metadata } from "next";
import { Open_Sans, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoLoop - Return Packaging at Your Doorstep",
  description: "Transform packaging waste into rewards. Hand empties to delivery drivers for instant discounts. No trips. No waste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${openSans.variable} antialiased font-open-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}