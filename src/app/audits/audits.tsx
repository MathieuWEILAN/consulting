"use client";

import React from "react";
import Hero from "../layout/Hero";
import Icon from "../components/Icon";
import study from "../assets/icons/study.png";
import visit from "../assets/icons/visit.png";
import docs from "../assets/icons/docs.png";
import casque from "../assets/icons/casque.png";
import vente from "../assets/icons/vente.png";
import Block2 from "../components/blocks/Block2";
import { prestationCards } from "../data";
import Image from "next/image";
import family from "../assets/img/family.jpg";
import TextImg from "../components/TextImg";
import travaux from "../assets/img/travaux-renovation-globale.jpg";

const AuditsPage = () => {
  return (
    <div>
      <Hero title="Audits" />
      <TextImg
        img={travaux}
        text="Nos services d'audit énergétique couvrent tous les aspects de votre
          consommation d'énergie, de l'analyse de vos factures à l'inspection de
          vos équipements. Nous identifions les inefficacités, proposons des
          solutions pratiques et durables, et suivons les performances pour
          garantir des résultats optimaux à long terme."
      />

      <section className="bg-primaryGreen py-10">
        <h2 className="container mx-auto">Pourquoi Choisir Audicée ?</h2>
        <Block2 array={prestationCards} />
      </section>
      <section className="w-full h-full">
        <div className="mx-auto  flex flex-col lg:flex-row w-full justify-between px-0 overflow-hidden">
          <div className="p-5 lg:p-10 xl:p-20 flex flex-col justify-center">
            <h2>Avec Audicée :</h2>
            <ul>
              <li className="text-lg lg:text-xl my-2.5">
                <strong className="text-primaryBlue">Réduisez</strong> vos
                dépenses énergétique
              </li>
              <li className="text-lg lg:text-xl my-2.5">
                <strong className="text-primaryBlue">Améliorez</strong> votre
                confort
              </li>
              <li className="text-lg lg:text-xl my-2.5">
                <strong className="text-primaryBlue">Augmentez</strong> la
                valeur de votre bien
              </li>
              <li className="text-lg lg:text-xl my-2.5">
                <strong className="text-primaryBlue">Profitez</strong> de
                l&apos;expertise de nos professionnels
              </li>
              <li className="text-lg lg:text-xl my-2.5">
                <strong className="text-primaryBlue">Préservez </strong>
                l&apos;environnement
              </li>
            </ul>
          </div>
          <Image
            src={family}
            alt=""
            className="w-full lg:w-1/2 h-auto object-cover object-center"
            width={700}
          ></Image>
        </div>
      </section>
    </div>
  );
};
export default AuditsPage;
