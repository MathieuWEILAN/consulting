"use client";
import React from "react";
import HeroVideo from "./layout/HeroVideo";
import maison from "./assets/img/maison-projet.jpg";
import TextImg from "./components/TextImg";
import engagement from "./assets/img/engagement.jpg";
import Button from "./components/Button";
import green from "./assets/img/green-homepage.png";
import BlockLogo from "./components/blocks/BlockLogo";
import analyse from "./assets/img/analyse.jpg";

export default function HomePage() {
  return (
    <>
      <HeroVideo title={"Conseil - Audit - Énergie"} />
      <BlockLogo className="pb-4" />
      <TextImg
        text="Nous sommes dévoués à aider les ménages à naviguer vers un avenir
            plus durable en maximisant leur efficacité énergétique et en réduisant leur impact
            environnemental. Notre passion pour l'innovation, combinée à notre engagement
            envers l'environnement, guide chacune de nos interventions."
        img={green}
        title="Rendre votre ménage plus durable, un audit à la fois."
        className="bg-primaryGreen"
      />
      <section className="bg-fixed bg-cover bg-[url('/panneaux.jpg')]">
        <div className="w-full flex items-center justify-center flex-col mx-auto py-20 text-white bg-opacity-90 bg-primaryBlue z-10 px-5">
          <h2>Contactez-nous pour votre projet de rénovation</h2>
          <Button text={"Contactez-nous"} />
        </div>
      </section>
      <TextImg
        title="Notre mission"
        text="Notre mission est de fournir des solutions d'audit énergétique de pointe, personnalisées pour répondre aux besoins uniques de chaque ménage. Nous nous engageons à apporter des changements concrets et mesurables qui contribuent à la préservation de notre planète tout en améliorant la rentabilité de nos clients."
        img={engagement}
        className="bg-primaryGreen"
        order="right"
      />
      <TextImg
        title="Notre approche"
        text="Chez Audicée, nous croyons en une approche holistique de l'efficacité énergétique.
          Nous commençons par une analyse approfondie de vos opérations pour identifier les
          opportunités d'amélioration. Ensuite, nous collaborons avec vous pour développer
          des solutions sur mesure qui maximiseront votre efficacité énergétique tout en
          respectant votre budget et vos objectifs commerciaux."
        img={analyse}
        className="bg-primaryGreen"
      />
      <TextImg
        title="Nos services"
        text="Nos services d'audit énergétique couvrent tous les aspects de votre consommation
          d'énergie, de l'analyse de vos factures à l'inspection de vos équipements. Nous
          identifions les inefficacités, proposons des solutions pratiques et durables, et suivons
          les performances pour garantir des résultats optimaux à long terme."
        img={maison}
        className="bg-primaryGreen"
        order="right"
        link="/audits"
        textLink="Découvrez nos services"
      />
    </>
  );
}
