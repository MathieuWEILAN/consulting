import { Montserrat, Manrope } from "next/font/google";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import StructuredData from "./components/StructuredData";
import type { Viewport } from "next";
import { rootMetadata } from "./metadata";
import "./globals.css";

export const metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#66C18C",
  width: "device-width",
  initialScale: 1,
};

const montserrat = Montserrat({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const manrope = Manrope({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${manrope.variable} overflow-x-hidden`}
      >
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
