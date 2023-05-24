import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["700","500","400"],
  subsets: ["latin"],
  style:["normal"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
