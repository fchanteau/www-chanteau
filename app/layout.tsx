import type { Metadata } from "next";
import { titleFont } from "../lib/fonts";

import "./globals.css";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export const metadata: Metadata = {
  title: "François Chanteau - Web Developer",
  description: "Portfolio of François Chanteau, a passionate web developer specializing in creating dynamic and responsive websites using the latest technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={titleFont.variable}>
      <body className="bg-background text-on-surface font-body-md min-h-screen flex flex-col relative selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
