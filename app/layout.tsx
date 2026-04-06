import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "NOM - AI-Powered Meal Builder & Delivery",
  description:
    "Create perfect meals with AI from local restaurants and get them delivered to your door.",
  generator: "v0.dev",
  icons: {
    icon: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable} font-serif bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
