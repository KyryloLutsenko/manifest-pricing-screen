import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const geistInter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pricing Screen",
  description: "Manifest Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistInter.variable}`}>{children}</body>
    </html>
  );
}
