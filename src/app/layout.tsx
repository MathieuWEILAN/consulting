import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audit et Rénovation Énergétique | Audicée",
  description:
    "Découvrez nos services experts en audit et rénovation énergétique pour optimiser votre consommation et améliorer le confort de votre domicile. Professionnels certifiés en Île-de-France.",
  keywords:
    "audit énergétique, rénovation énergétique, efficacité énergétique, économies d'énergie, confort thermique, transition énergétique, audit, économies, mon accompagnateur rénov, ma prim renov, Île-de-France",

  openGraph: {
    images: "/og-image.png",
  },
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
