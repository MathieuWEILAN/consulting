import { Metadata } from "next";
import TextImg from "../components/TextImg";
import Hero from "../layout/Hero";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous | Audicée",
  description:
    "Découvrez l'équipe Audicée, experts certifiés en audit et rénovation énergétique en Île-de-France. Notre engagement pour l'efficacité énergétique depuis 2020.",
  alternates: {
    canonical: "/qui-sommes-nous",
  },
  openGraph: {
    title: "Qui Sommes-Nous | Audicée",
    description:
      "Experts certifiés en audit et rénovation énergétique en Île-de-France depuis 2020.",
    url: "/qui-sommes-nous",
  },
};

export default function MonAccompagneurRenov() {
  return (
    <>
      <Hero
        image2={
          "https://res.cloudinary.com/df1icoftf/image/upload/v1779374968/analyse_wvfrvm.webp"
        }
        title={
          "Notre objectif : Rendre votre ménage plus durable, un audit à la fois."
        }
      />

      <TextImg
        img={
          "https://res.cloudinary.com/df1icoftf/image/upload/v1779377169/green-min_ubaqur.webp"
        }
        text="Chez Audicée, nous sommes dévoués à aider les ménages à naviguer
            vers un avenir plus durable en maximisant leur efficacité
            énergétique et en réduisant leur impact environnemental. Notre
            passion pour l'innovation, combinée à notre engagement envers
            l'environnement, guide chacune de nos interventions."
        title={"Rendre votre ménage plus durable, un audit à la fois."}
      />
      <TextImg
        img={
          "https://res.cloudinary.com/df1icoftf/image/upload/v1779377169/green-min_ubaqur.webp"
        }
        text="Notre mission est de fournir des solutions d'audit énergétique de pointe,
        personnalisées pour répondre aux besoins uniques de chaque ménage. Nous nous
        engageons à apporter des changements concrets et mesurables qui contribuent à la
        préservation de notre planète tout en améliorant la rentabilité de nos clients."
        title={"Notre Mission"}
        className={"grad-blue"}
        order={"right"}
      />
      <TextImg
        img={
          "https://res.cloudinary.com/df1icoftf/image/upload/v1779376817/money_uckrh5.webp"
        }
        text="Chez Audicée, nous croyons en une approche holistique de l'efficacité énergétique.
        Nous commençons par une analyse approfondie de vos opérations pour identifier les
        opportunités d'amélioration. Ensuite, nous collaborons avec vous pour développer
        des solutions sur mesure qui maximiseront votre efficacité énergétique tout en
        respectant votre budget et vos objectifs commerciaux."
        title="Notre Approche"
      />

      <TextImg
        title="Nos Services"
        img={
          "https://res.cloudinary.com/df1icoftf/image/upload/v1779377242/engagement.0t03h4m.nxgh6_cdmj6g.webp"
        }
        text="Nos services d'audit énergétique couvrent tous les aspects de votre consommation
        d'énergie, de l'analyse de vos factures à l'inspection de vos équipements. Nous
        identifions les inefficacités, proposons des solutions pratiques et durables, et suivons
        les performances pour garantir des résultats optimaux à long terme."
        order={"right"}
        className={"grad-green"}
      />
    </>
  );
}
