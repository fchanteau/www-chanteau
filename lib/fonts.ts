import localFont from "next/font/local"

export const titleFont = localFont({
  src: [
    {
      path: "../public/fonts/Acorn/Acorn-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Acorn/Acorn-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--title-font",
  display: "swap",
})