import type { Metadata } from "next";
import { newsreader, dmSans } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/favicon.ico" },
  title: "SHONGO — The Art of Bengali Gastronomy",
  description:
    "Savor the rich heritage of Bangladeshi hospitality through contemporary, chef-crafted recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
