"use client";

import Image from "next/image";
import Head from "next/head";
import money from "../assets/img/money.jpg";
import engagement from "../assets/img/engagement.jpg";
import analyse from "../assets/img/analyse.jpg";
import green from "../assets/img/green.jpg";
import TextImage from "../components/TextImage";
import Hero from "../layout/Hero";
export default function MonAccompagneurRenov() {
  return (
    <>
      <Head>
        <title>Qui sommes-nous ?</title>
      </Head>
      <Hero
        image2={analyse}
        title={
          "Notre objectif : Rendre votre ménage plus durable, un audit à la fois."
        }
      />

      <TextImage
        image={green}
        text="Chez Audicée, nous sommes dévoués à aider les ménages à naviguer
            vers un avenir plus durable en maximisant leur efficacité
            énergétique et en réduisant leur impact environnemental. Notre
            passion pour l'innovation, combinée à notre engagement envers
            l'environnement, guide chacune de nos interventions."
        title={"Rendre votre ménage plus durable, un audit à la fois."}
      />
      <TextImage
        image={green}
        text="Notre mission est de fournir des solutions d'audit énergétique de pointe,
        personnalisées pour répondre aux besoins uniques de chaque ménage. Nous nous
        engageons à apporter des changements concrets et mesurables qui contribuent à la
        préservation de notre planète tout en améliorant la rentabilité de nos clients."
        title={"Notre Mission"}
        backgroundImg={"grad-blue"}
        order={"right"}
      />
      <TextImage
        image={money}
        text="Chez Audicée, nous croyons en une approche holistique de l'efficacité énergétique.
        Nous commençons par une analyse approfondie de vos opérations pour identifier les
        opportunités d'amélioration. Ensuite, nous collaborons avec vous pour développer
        des solutions sur mesure qui maximiseront votre efficacité énergétique tout en
        respectant votre budget et vos objectifs commerciaux."
        title="Notre Approche"
      />

      <TextImage
        title="Nos Services"
        image={engagement}
        text="Nos services d'audit énergétique couvrent tous les aspects de votre consommation
        d'énergie, de l'analyse de vos factures à l'inspection de vos équipements. Nous
        identifions les inefficacités, proposons des solutions pratiques et durables, et suivons
        les performances pour garantir des résultats optimaux à long terme."
        order={"right"}
        backgroundImg={"grad-green"}
      />
    </>
  );
}
