import { Metadata } from "next";

export const rootMetadata: Metadata = {
  title: {
    default: "Audicée | Audit et Rénovation Énergétique en Île-de-France",
    template: "%s | Audicée",
  },
  description:
    "Expert en audit énergétique et rénovation énergétique en Île-de-France. Optimisez votre consommation, améliorez votre confort et réduisez vos factures avec nos professionnels certifiés Ma Prime Rénov.",
  keywords:
    "audit énergétique, rénovation énergétique, efficacité énergétique, économies d'énergie, confort thermique, transition énergétique, Ma Prime Rénov, accompagnateur rénov, Île-de-France, DPE, diagnostic performance énergétique",
  authors: [{ name: "Audicée" }],
  creator: "Audicée",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://audicee.fr"
  ),
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Audicée | Expert Audit et Rénovation Énergétique",
    description:
      "Optimisez votre consommation énergétique avec nos audits professionnels en Île-de-France. Professionnels certifiés, accompagnement Ma Prime Rénov complet.",
    url: "/",
    siteName: "Audicée",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/panneaux.jpg",
        width: 1200,
        height: 630,
        alt: "Audicée - Expert en Audit et Rénovation Énergétique en Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audicée | Audit et Rénovation Énergétique",
    description:
      "Expert en audit énergétique et rénovation énergétique en Île-de-France. Réduisez vos factures, améliorez votre confort.",
    images: ["/panneaux.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "services",
};
