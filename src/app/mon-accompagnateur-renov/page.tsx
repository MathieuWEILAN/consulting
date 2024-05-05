"use client";

import logoRenov from "../assets/img/logo_MAR.jpg";
import Image from "next/image";
import panneaux from "../assets/img/panneaux.jpg";
import anah from "../assets/img/anah.png";
import money from "../assets/img/money.jpg";
import engagement from "../assets/img/engagement.jpg";
import house from "../assets/img/maison-projet.jpg";
import maPrimeRenov from "../assets/img/mpr-bg.png";
import Hero from "../layout/Hero";
import TextImg from "../components/TextImg";
import Block1 from "../components/blocks/Block1";
import { arrayCards } from "../data";
import TextImage from "../components/TextImage";
import Link from "next/link";
import renov from "../assets/img/renov.webp";
import france from "../assets/img/france.png";
import mains from "../assets/img/mains.jpg";
import BlockLogo from "../components/blocks/BlockLogo";

export default function MonAccompagneurRenov() {
  return (
    <>
      <section className="relative">
        <Hero
          image1={logoRenov}
          image2={house}
          title="Mon Accompagnateur Renov"
        />
      </section>
      <TextImg
        title={"AUDICÉE est agréé Mon accompagnateur Rénov"}
        text={
          "Chez Audicée, nous sommes fiers d'être agréés Mon Accompagnateur Rénov' par l'ANAH et partenaires de MaPrimeRénov, deux labels de qualité et de confiance dans le domaine de la rénovation énergétique. Ces agréments témoignent de notre engagement envers l'excellence et notre capacité à fournir des services d'audit énergétique et de rénovation de premier ordre à nos clients."
        }
        img={renov}
      />
      <TextImg
        title="Qu'est-ce que Mon Accompagnateur Rénov' et MaPrimeRénov ?"
        text="Mon
        Accompagnateur Rénov' est un programme soutenu par l'ANAH qui
        certifie les entreprises et les professionnels de la rénovation
        énergétique, garantissant leur expertise et leur sérieux dans ce
        domaine. MaPrimeRénov est une aide financière de l'État destinée à
        soutenir les travaux de rénovation énergétique des logements."
        img={anah}
        className={"p-10 bg-white h-full w-full"}
        order="right"
      />

      <TextImg
        title="Ce que cela signifie pour vous"
        text="En choisissant Audicée pour vos besoins en rénovation énergétique,
          vous avez l'assurance de travailler avec une équipe qualifiée et
          compétente, capable de vous accompagner dans toutes les étapes de
          votre projet, de l'audit initial à la réalisation des travaux, tout
          en bénéficiant des aides financières disponibles grâce à
          MaPrimeRénov."
        img={money}
      />
      <TextImg
        title="Notre Engagement Continu"
        text="En tant que partenaire agréé Mon Accompagnateur Rénov', nous nous
            engageons à maintenir notre excellence en matière de services de
            rénovation énergétique. Nous continuons à nous former et à nous
            tenir informés des dernières innovations et meilleures pratiques de
            l'industrie pour mieux servir nos clients et contribuer à un habitat
            plus écologique et durable."
        img={mains}
        order={"right"}
      />
      <Block1 array={arrayCards} />
      <section className="bg-primaryGreen">
        <div className="container mx-auto flex flex-col lg:flex-row py-10">
          <Image
            src={france}
            alt="France"
            width={500}
            height={500}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          />
          <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center text-center shadow-xl bg-stone-50 rounded-lg order-1 lg:order-2">
            <h2>Nous intervenons dans plusieurs départements.</h2>
            <p className="my-4">
              Nous sommes agréés MON ACCOMPAGNATEUR RÉNOV dans plusieurs
              départements. Découvrez la listes.
            </p>
            <Link
              href={"/liste-des-departements"}
              className="w-fit border-2 py-2.5 px-4 rounded-full uppercase bg-slate-50 border-green-600 text-green-600 hover:border-slate-50 hover:bg-primaryGreen hover:text-slate-50 font-bold"
            >
              Voir la liste
            </Link>
            <p className="my-4">
              Contactez-nous pour obtenir un devis gratuit et sans engagement
              pour votre projet de rénovation énergétique.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
