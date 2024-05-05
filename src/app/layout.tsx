import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audit et Rénovation Énergétique en Île-de-France | Audicée",
  description:
    "Découvrez nos services experts en audit et rénovation énergétique pour optimiser votre consommation et améliorer le confort de votre domicile. Professionnels certifiés en Île-de-France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
