import type { Metadata } from "next";
import { titleFont } from "../lib/fonts";

import "./globals.css";

import { NavBar } from "./_components/NavBar";

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
      <body className="antialiased m-0 p-0 min-h-svh bg-linear-to-l from-[#BDFFF3] via-[#FFEFBA] to-[#BDFFF3] bg-size-[400%_400%] animate-[gradient-move_10s_ease_infinite]">
          <NavBar />

          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
