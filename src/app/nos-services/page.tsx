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
import { motion, Variants } from "framer-motion";
import family from "../assets/img/family.jpg";
import TextImg from "../components/TextImg";
import travaux from "../assets/img/travaux-renovation-globale.jpg";

const NosServicesPage = () => {
  return (
    <div>
      <Hero title="Nos services" />
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
      {/* <section className="w-full py-10 flex flex-col items-center justify-center container mx-auto">
        <h2 className="container mx-auto text-center">Un Audit par Étapes</h2>
        <div className="lg:container lg:mx-auto w-full flex lg:justify-center flex-col lg:flex-row lg:flex-wrap">
          <Icon
            img={study}
            title={"Études énergétique"}
            subTitle={"La Première Étape Vers une Maison Plus Éco-responsable"}
            text={
              "Notre étude énergétique est la fondation de votre projet de rénovation.Cette analyse détaillée commence par un audit sur site où nos experts utilisent des outils de mesure avancés pour évaluer la performance énergétique de votre habitation. Nous examinons votre système de chauffage, votre isolation, et vos installations électriques pour identifier les potentielles déperditions énergétiques. Le rapport que nous vous fournissons comprend non seulement un bilan complet, mais aussi des simulations d'améliorations possibles, offrant ainsi une vision claire des économies d'énergie potentielles et des augmentations de confort que vous pourriez réaliser."
            }
          />
          <Icon
            img={visit}
            title={"Visite Technique"}
            subTitle={"Validation et Précision pour Votre Confort"}
            text={
              "Après l'étude énergétique, nous procédons à une visite technique approfondie. C'est une étape cruciale qui permet d'assurer l'exactitude de notre première analyse et de découvrir des aspects spécifiques de votre maison qui pourraient requérir des adaptations personnalisées de notre plan initial. Durant cette visite, nos techniciens recueillent des données supplémentaires qui aideront à peaufiner la stratégie de rénovation. Cette étape garantit que les solutions que nous vous proposons sont non seulement viables mais parfaitement adaptées à votre situation unique."
            }
          />

          <Icon
            img={docs}
            title={"Démarches Administratives"}
            subTitle={"Nous Nous Chargeons de Tout"}
            text={
              "La rénovation énergétique implique souvent une complexité administrative non négligeable. Nous vous libérons de ce fardeau en prenant en charge toutes les démarches nécessaires. De l'obtention des permis de construire à la gestion des demandes de subventions et crédits d'impôt, notre équipe s'assure que tout est en ordre. Nous vous tenons informés à chaque étape, vous fournissant tranquillité d'esprit et la garantie que les aspects légaux et financiers sont bien gérés."
            }
          />

          <Icon
            img={casque}
            title={"Supervision des Travaux"}
            subTitle={"Votre Projet entre de Bonnes Mains"}
            text={
              "L'excellence de la mise en œuvre est cruciale pour le succès de tout projet de rénovation énergétique. Pendant la phase de travaux, nos superviseurs de chantier qualifiés assurent une coordination impeccable entre les différents corps de métier. Nous veillons à ce que les travaux avancent selon le planning établi, dans le respect des normes de qualité et de sécurité les plus strictes. Notre engagement dans la supervision active permet de prévenir les imprévus et de garantir que le résultat final correspond à vos attentes et à nos engagements."
            }
          />

          <Icon
            img={vente}
            title={"Suivi Client"}
            subTitle={"Un Engagement de Longue Durée"}
            text={
              "Notre relation avec vous ne s'arrête pas à la fin des travaux. La dernière étape de notre service comprend un suivi rigoureux pour s'assurer que les améliorations réalisées portent leurs fruits en termes d'économies d'énergie et de confort amélioré. Nous proposons des visites de suivi et des ajustements si nécessaire, et restons disponibles pour toute question ou besoin supplémentaire. Notre objectif est votre satisfaction totale et l'assurance que votre investissement continue de vous bénéficier à long terme."
            }
          />
        </div>
      </section> */}

      <section className="w-full h-full">
        <div className="mx-auto  flex flex-col lg:flex-row w-full justify-between px-0 overflow-hidden">
          <div className="p-5 lg:p-20 flex flex-col justify-center">
            <h2>Avec Audicée :</h2>
            <ul>
              <li className="text-lg lg:text-2xl my-2.5">
                <strong className="text-primaryBlue">Réduisez</strong> vos
                dépenses énergétique
              </li>
              <li className="text-lg lg:text-2xl my-2.5">
                <strong className="text-primaryBlue">Améliorez</strong> votre
                confort
              </li>
              <li className="text-lg lg:text-2xl my-2.5">
                <strong className="text-primaryBlue">Augmentez</strong> la
                valeur de votre bien
              </li>
              <li className="text-lg lg:text-2xl my-2.5">
                <strong className="text-primaryBlue">Profitez</strong> de
                l&apos;expertise de nos professionnels
              </li>
              <li className="text-lg lg:text-2xl my-2.5">
                <strong className="text-primaryBlue">Préservez </strong>
                l&apos;environnement
              </li>
            </ul>
          </div>
          <Image
            src={family}
            alt=""
            className="shadow-xl w-full lg:w-1/2 h-full"
            width={700}
          ></Image>
        </div>
      </section>
    </div>
  );
};
export default NosServicesPage;
