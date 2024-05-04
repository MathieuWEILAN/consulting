"use client";
import React from "react";
import Hero from "./layout/Hero";
import Block1 from "./components/blocks/Block1";
import { arrayCards } from "./data";
import Image from "next/image";
import Link from "next/link";
import TextImage from "./components/TextImage";
import france from "./assets/img/france.png";
import Button from "./components/Button";
import green from "./assets/img/green-homepage.png";
import homeHero from "./assets/img/home-hero.gif";
import { homePageWhy } from "./data";

export default function Home() {
  return (
    <>
      <Hero image2={homeHero} />
      <main className="flex flex-col w-full bg-opacity-20 bg-white">
        <div className="w-full">
          <TextImage
            image={green}
            text="Nous nous engageons à transformer votre maison en un foyer à la
              fois confortable et respectueux de l'environnement. Spécialisés
              dans les audits énergétiques et l'accompagnement personnalisé,
              nous vous guidons à chaque étape de la rénovation énergétique de
              votre domicile."
            title="Audicée, votre expert en Rénovation Énergétique"
            classImg="bg-primaryGreen w-[400px]"
            link={"/qui-sommes-nous"}
            textLink={"Nous connaître"}
          />
        </div>

        <section className="grad py-10 p-5 grad-blue">
          <div className="container w-full flex items-center justify-center flex-col mx-auto py-10 bg-slate-50 rounded-xl shadow-xl">
            <h2>Contactez-nous pour votre projet de rénovation</h2>
            <Button text={"Contactez-nous"} />
          </div>
        </section>
        {/* <section>
          <div className="lg:container w-full flex items-center justify-center flex-col mx-auto px-5 lg:px-0 py-10 bg-slate-50 h-auto">
            <ImgTextImg
              img1={MaPrimRenov}
              img2={MonAccompagnateur}
              title={
                "Accompagnés par Mon Accompagnateur Rénov' et MaPrimeRénov"
              }
              text="Chez Audicée, nous sommes fiers d'être agréésMon Accompagnateur Rénov' par l'ANAH </strong>
              et partenaires de MaPrimeRénov, deux labels
              de qualité et de confiance dans le domaine de la rénovation
              énergétique. Ces agréments témoignent de notre
              engagement envers l'excellence et notre capacité à fournir des
              services d'audit énergétique et de rénovation de premier ordre
              à nos clients."
            />
          </div>
        </section> */}
        <section className="container mx-auto lg:p-10 flex flex-col items-end">
          <h2 className="text-center w-full">
            Pourquoi se faire accompagner dans votre rénovation?
          </h2>
          <p className="lg:px-20 lg:pt-10">
            La transition énergétique de votre maison n&apos;est pas seulement
            une question de remplacement d&apos;équipements ou
            d&apos;installation de nouvelles technologies.<br></br> Il
            s&apos;agit d&apos;une démarche complète qui vise à optimiser votre
            consommation énergétique, à réduire vos coûts et à améliorer votre
            confort, tout en contribuant à la protection de notre environnement.
            Voici pourquoi l&apos;accompagnement par un professionnel de
            l&apos;audit énergétique est essentiel :
          </p>
          <div className="flex flex-wrap lg:flex-row flex-col lg:px-20 lg:py-10">
            {homePageWhy.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full lg:w-1/3 lg:px-10 my-4 lg:my-10"
                >
                  <h3>
                    {index + 1}. {item.title}
                  </h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
          <Block1 array={arrayCards} />

          <Link
            href="/nos-services"
            className="w-fit text-lg hover:underline mt-2.5 lg:px-20 mb-5"
          >
            Découvrez nos services
          </Link>
        </section>

        <section className="grad-green">
          <div className="container mx-auto flex flex-col lg:flex-row py-10">
            <Image
              src={france}
              alt="France"
              width={500}
              height={500}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            />
            <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center text-center shadow-xl bg-stone-50 rounded-lg bg-opacity-80 order-1 lg:order-2">
              <h2>Nous intervenons dans plusieurs départements.</h2>
              <p className="my-4">Découvrez la listes des départements.</p>
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
      </main>
    </>
  );
}
