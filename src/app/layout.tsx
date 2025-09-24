import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import StructuredData from "./components/StructuredData";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Audicée | Audit et Rénovation Énergétique en Île-de-France",
    template: "%s | Audicée"
  },
  description: "Expert en audit énergétique et rénovation énergétique en Île-de-France. Optimisez votre consommation, améliorez votre confort et réduisez vos factures avec nos professionnels certifiés Ma Prime Rénov.",
  keywords: "audit énergétique, rénovation énergétique, efficacité énergétique, économies d'énergie, confort thermique, transition énergétique, Ma Prime Rénov, accompagnateur rénov, Île-de-France, DPE, diagnostic performance énergétique",
  authors: [{ name: "Audicée" }],
  creator: "Audicée",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://audicee.fr'),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Audicée | Expert Audit et Rénovation Énergétique",
    description: "Optimisez votre consommation énergétique avec nos audits professionnels en Île-de-France. Professionnels certifiés, accompagnement Ma Prime Rénov complet.",
    url: "/",
    siteName: "Audicée",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/img/COULEUR_JPEG.jpg",
        width: 1200,
        height: 630,
        alt: "Audicée - Expert en Audit et Rénovation Énergétique en Île-de-France"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Audicée | Audit et Rénovation Énergétique",
    description: "Expert en audit énergétique et rénovation énergétique en Île-de-France. Réduisez vos factures, améliorez votre confort.",
    images: ["/assets/img/COULEUR_JPEG.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="w-screen">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={`${roboto.className} overflow-x-hidden !w-screen`}>
        <PerformanceOptimizer />
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
