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
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <HeroVideo title={"Conseil - Audit - Énergie"} />
      <BlockLogo className="pb-4" />
      <TextImg img={green} className="bg-primaryGreen">
        <motion.h2 className="w-full">
          Rendre votre ménage plus durable, un audit à la fois.
        </motion.h2>
        <motion.p className="w-full text-xl">
          {" "}
          Nous sommes dévoués à aider les ménages à naviguer vers un avenir plus
          durable en maximisant leur efficacité énergétique et en réduisant leur
          impact environnemental.
          <br />
          <br /> Notre passion pour l&apos;innovation, combinée à notre
          engagement envers l&apos;environnement, guide chacune de nos
          interventions.
        </motion.p>{" "}
      </TextImg>
      <section className="bg-fixed bg-cover bg-[url('/panneaux.jpg')]">
        <div className="w-full flex items-center justify-center flex-col mx-auto py-20 text-white bg-opacity-90 bg-primaryBlue z-10 px-5">
          <h2>Contactez-nous pour votre projet de rénovation</h2>
          <a
            href="mailto:auditenergie77@gmail.com"
            className="w-fit border-2 py-2.5 px-4 rounded-full uppercase bg-slate-50 border-primaryBlue text-primaryBlue hover:border-slate-50 hover:bg-primaryBlue hover:text-slate-50 font-bold"
          >
            Contactez-nous
          </a>
        </div>
      </section>
      <TextImg img={engagement} className="bg-primaryGreen" order="right">
        <motion.h2 className="w-full">Notre mission</motion.h2>
        <motion.p className="w-full text-xl">
          Notre mission est de fournir des solutions d&apos;audit énergétique de
          pointe, personnalisées pour répondre aux besoins uniques de chaque
          ménage. <br /> <br /> Nous nous engageons à apporter des changements
          concrets et mesurables qui contribuent à la préservation de notre
          planète tout en améliorant la rentabilité de nos clients.
        </motion.p>
      </TextImg>
      <TextImg img={analyse} className="bg-primaryGreen">
        <motion.h2 className="w-full">Notre approche</motion.h2>
        <motion.p className="w-full text-xl">
          Chez Audicée, nous croyons en une approche holistique de
          l&apos;efficacité énergétique. Nous commençons par une analyse
          approfondie de vos opérations pour identifier les opportunités
          d&apos;amélioration. <br /> <br /> Ensuite, nous collaborons avec vous
          pour développer des solutions sur mesure qui maximiseront votre
          efficacité énergétique tout en respectant votre budget et vos
          objectifs commerciaux.
        </motion.p>
      </TextImg>
      <TextImg
        img={maison}
        className="bg-primaryGreen"
        order="right"
        link="/audits"
        textLink="Découvrez nos services"
      >
        <motion.h2 className="w-full">Nos services</motion.h2>
        <motion.p className="w-full text-xl">
          Nos services d&apos;audit énergétique couvrent tous les aspects de
          votre consommation d&apos;énergie, de l&apos;analyse de vos factures à
          l&apos;inspection de vos équipements. <br /> <br /> Nous identifions
          les inefficacités, proposons des solutions pratiques et durables, et
          suivons les performances pour garantir des résultats optimaux à long
          terme.
        </motion.p>
      </TextImg>
    </>
  );
}
