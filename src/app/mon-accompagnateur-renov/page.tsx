import { Metadata } from "next";
import logoRenov from "../assets/img/logo_MAR.jpg";
import Image from "next/image";
import anah from "../assets/img/anah.png";
import money from "../assets/img/money.jpg";
import house from "../assets/img/maison-projet.jpg";
import Hero from "../layout/Hero";
import TextImg from "../components/TextImg";
import Block1 from "../components/blocks/Block1";
import { arrayCards } from "../data";
import Link from "next/link";
import renov from "../assets/img/renov.webp";
import france from "../assets/img/france.png";
import mains from "../assets/img/mains.jpg";

export const metadata: Metadata = {
  title: "Mon Accompagnateur Rénov' Agréé ANAH | Audicée Île-de-France",
  description:
    "Audicée est agréé Mon Accompagnateur Rénov' par l'ANAH. Accompagnement complet MaPrimeRénov, audit énergétique et rénovation globale en Île-de-France. Devis gratuit.",
  alternates: {
    canonical: "/mon-accompagnateur-renov",
  },
  openGraph: {
    title: "Mon Accompagnateur Rénov' Agréé ANAH | Audicée",
    description:
      "Agréé Mon Accompagnateur Rénov' par l'ANAH. Accompagnement MaPrimeRénov en Île-de-France. Devis gratuit.",
    url: "/mon-accompagnateur-renov",
  },
};

export default function MonAccompagneurRenovPage() {
  return (
    <>
      <section className="relative">
        <Hero
          image1={logoRenov}
          image2={house}
          title="Mon Accompagnateur Renov"
        />
      </section>
      <TextImg img={renov}>
        <h2 className="w-full">
          AUDICÉE est agréé Mon accompagnateur Rénov
        </h2>
        <p className="w-full text-xl">
          Chez Audicée, nous sommes fiers d&apos;être agréés Mon Accompagnateur
          Rénov&apos; par l&apos;ANAH et partenaires de MaPrimeRénov, deux
          labels de qualité et de confiance dans le domaine de la rénovation
          énergétique. <br /> <br /> Ces agréments témoignent de notre
          engagement envers l&apos;excellence et notre capacité à fournir des
          services d&apos;audit énergétique et de rénovation de premier ordre à
          nos clients.
        </p>
      </TextImg>
      <TextImg
        img={anah}
        className={"p-10 bg-white h-full w-full"}
        order="right"
      >
        <h2 className="w-full">
          Qu&apos;est-ce que Mon Accompagnateur Rénov&apos; et MaPrimeRénov ?
        </h2>
        <p className="w-full text-xl">
          Mon Accompagnateur Rénov&apos; est un programme soutenu par
          l&apos;ANAH qui certifie les entreprises et les professionnels de la
          rénovation énergétique, garantissant leur expertise et leur sérieux
          dans ce domaine.
          <br /> <br /> MaPrimeRénov est une aide financière de l&apos;Etat
          destinée à soutenir les travaux de rénovation énergétique des
          logements.
        </p>
      </TextImg>

      <TextImg img={money}>
        <h2 className="w-full">Ce que cela signifie pour vous</h2>
        <p className="w-full text-xl">
          En choisissant Audicée pour vos besoins en rénovation énergétique,
          vous avez l&apos;assurance de travailler avec une équipe qualifiée et
          compétente, capable de vous accompagner dans toutes les étapes de
          votre projet, de l&apos;audit initial à la réalisation des travaux,
          tout en bénéficiant des aides financières disponibles grâce à
          MaPrimeRénov.
        </p>
      </TextImg>
      <TextImg img={mains} order={"right"}>
        <h2 className="w-full">Notre Engagement Continu</h2>
        <p className="w-full text-xl">
          En tant que partenaire agréé Mon Accompagnateur Rénov&apos;, nous nous
          engageons à maintenir notre excellence en matière de services de
          rénovation énergétique. <br /> <br /> Nous continuons à nous former et
          à nous tenir informés des dernières innovations et meilleures
          pratiques de l&apos;industrie pour mieux servir nos clients et
          contribuer à un habitat plus écologique et durable.
        </p>
      </TextImg>
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
