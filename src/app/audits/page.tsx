import { Metadata } from "next";
import Hero from "../layout/Hero";
import Block2 from "../components/blocks/Block2";
import { prestationCards } from "../data";
import Image from "next/image";
import family from "../assets/img/family.jpg";
import TextImg from "../components/TextImg";
import travaux from "../assets/img/travaux-renovation-globale.jpg";

export const metadata: Metadata = {
  title: "Audit Énergétique Professionnel | Ma Prime Rénov Île-de-France",
  description: "Service d'audit énergétique certifié en Île-de-France. Diagnostic complet, accompagnement Ma Prime Rénov, solutions personnalisées. Réduisez vos factures de 20 à 40%. Devis gratuit.",
  keywords: "audit énergétique professionnel, Ma Prime Rénov, diagnostic énergétique, DPE, efficacité énergétique, rénovation énergétique, accompagnateur rénov, audit thermique, Île-de-France, Paris",
  alternates: {
    canonical: "/audits",
  },
  openGraph: {
    title: "Audit Énergétique Certifié | Ma Prime Rénov Île-de-France",
    description: "Audit énergétique complet avec accompagnement Ma Prime Rénov. Professionnels certifiés, diagnostic précis, solutions sur-mesure en Île-de-France.",
    url: "/audits",
  },
};

const AuditsPage = () => {
  return (
    <div>
      <Hero title="Audits" />
      <TextImg img={travaux}>
        <h2 className="w-full">Nos services</h2>
        <p className="w-full text-xl">
          Nos services d&apos;audit énergétique couvrent tous les aspects de
          votre consommation d&apos;énergie, de l&apos;analyse de vos factures à
          l&apos;inspection de vos équipements. Nous identifions les
          inefficacités, proposons des solutions pratiques et durables, et
          suivons les performances pour garantir des résultats optimaux à long
          terme.
        </p>
      </TextImg>
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
