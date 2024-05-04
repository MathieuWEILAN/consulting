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

import TextImage from "../components/TextImage";
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
      <TextImage
        title={"AUDICÉE est agréé Mon accompagnateur Rénov"}
        text={
          "Chez Audicée, nous sommes fiers d'être agréés Mon Accompagnateur Rénov' par l'ANAH et partenaires de MaPrimeRénov, deux labels de qualité et de confiance dans le domaine de la rénovation énergétique. Ces agréments témoignent de notre engagement envers l'excellence et notre capacité à fournir des services d'audit énergétique et de rénovation de premier ordre à nos clients."
        }
        image={logoRenov}
      />
      <TextImage
        title="Qu'est-ce que Mon Accompagnateur Rénov' et MaPrimeRénov ?"
        text="Qu'est-ce que Mon Accompagnateur Rénov' et MaPrimeRénov ? Mon
        Accompagnateur Rénov' est un programme soutenu par l'ANAH qui
        certifie les entreprises et les professionnels de la rénovation
        énergétique, garantissant leur expertise et leur sérieux dans ce
        domaine. MaPrimeRénov est une aide financière de l'État destinée à
        soutenir les travaux de rénovation énergétique des logements."
        image={anah}
        backgroundImg={"grad-blue"}
        classImg={"p-10 bg-stone-50 h-72 w-72"}
      />
      <TextImage
        title="Ce que cela signifie pour vous"
        text="En choisissant Audicée pour vos besoins en rénovation énergétique,
          vous avez l'assurance de travailler avec une équipe qualifiée et
          compétente, capable de vous accompagner dans toutes les étapes de
          votre projet, de l'audit initial à la réalisation des travaux, tout
          en bénéficiant des aides financières disponibles grâce à
          MaPrimeRénov."
        image={money}
        order={"right"}
      />
      <TextImage
        title="Notre Engagement Continu"
        text="En tant que partenaire agréé Mon Accompagnateur Rénov', nous nous
            engageons à maintenir notre excellence en matière de services de
            rénovation énergétique. Nous continuons à nous former et à nous
            tenir informés des dernières innovations et meilleures pratiques de
            l'industrie pour mieux servir nos clients et contribuer à un habitat
            plus écologique et durable."
        image={engagement}
        backgroundImg={"grad-green"}
      />
    </>
  );
}
