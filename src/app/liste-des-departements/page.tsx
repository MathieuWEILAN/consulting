import Hero from "../layout/Hero";
import paris from "../assets/img/paris.jpg";
import Image from "next/image";
import france from "../assets/img/france.png";
import { Metadata } from "next";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Zones d'Intervention Île-de-France | Audit Énergétique par Département",
  description: "Découvrez nos zones d'intervention en Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Val-d'Oise (95). Services d'audit énergétique professionnel.",
  keywords: "audit énergétique Paris, rénovation énergétique Seine-et-Marne, Ma Prime Rénov Yvelines, efficacité énergétique Essonne, diagnostic énergétique Hauts-de-Seine, accompagnateur rénov Seine-Saint-Denis, audit énergétique Val-de-Marne, rénovation énergétique Val-d'Oise",
  alternates: {
    canonical: "/liste-des-departements",
  },
  openGraph: {
    title: "Zones d'Intervention Île-de-France | Audit Énergétique Audicée",
    description: "Services d'audit et rénovation énergétique dans tous les départements d'Île-de-France. Experts certifiés Ma Prime Rénov.",
    url: "/liste-des-departements",
  },
};

const ListeDesDepartementsPage = () => {
  return (
    <>
      <StructuredData
        type="service"
        data={{
          name: "Services d'audit énergétique en Île-de-France",
          description: "Services professionnels d'audit et rénovation énergétique dans tous les départements d'Île-de-France : Paris, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Val-d'Oise"
        }}
      />
      <Hero image2={paris} title="Zones d'Intervention en Île-de-France" />
      <section className="flex flex-col items-center">
        <div className="container mx-auto p-5 lg:p-20">
          <h2>Nos Zones d&apos;Intervention en France</h2>
          <p>
            Chez Audicée, nous sommes fiers de fournir des services d&apos;audit
            et de rénovation énergétique de premier plan à travers de nombreux
            départements en France, avec une présence forte et stratégique en
            Île-de-France.
          </p>
          <h3>Une forte présence en Île-de-France</h3>
          <p>
            L&apos;Île-de-France, le cœur économique et démographique du pays,
            est au centre de nos interventions. Nous offrons nos services dans
            tous les départements de cette région, y compris Paris (75),
            Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine
            (92), Seine-Saint-Denis (93), Val-de-Marne (94), et Val-d&apos;Oise
            (95). Notre expertise et notre connaissance approfondie du bâti
            régional nous permettent de proposer des solutions personnalisées
            qui répondent spécifiquement aux besoins énergétiques des
            habitations franciliennes.
          </p>
          <h3>Au-delà de l&apos;Île-de-France</h3>
          <p>
            En plus de notre concentration en Île-de-France, nous étendons nos
            services à d&apos;autres départements clés pour répondre à la
            demande croissante en efficacité énergétique. Ces départements
            incluent, sans s&apos;y limiter, l&apos;Oise (60), l&apos;Eure (27),
            et la Loiret (45). Cette expansion géographique témoigne de notre
            engagement à promouvoir une efficacité énergétique durable et
            accessible, partout où le besoin se fait sentir.
          </p>
          <h3>Engagement envers l&apos;excellence et l&apos;efficacité</h3>
          <p>
            Dans chaque département où nous intervenons, notre mission reste la
            même : offrir des services d&apos;audit énergétique précis, des
            conseils d&apos;experts et des solutions de rénovation qui non
            seulement réduisent la consommation énergétique et les coûts
            associés mais améliorent également le confort et la valeur des biens
            immobiliers. Nous utilisons des technologies de pointe et des
            méthodologies éprouvées pour garantir que chaque projet est réalisé
            avec le plus haut niveau de qualité et d&apos;efficacité.
          </p>
          <h3>Votre partenaire de confiance en rénovation énergétique</h3>
          <p>
            Si vous résidez dans l&apos;un de ces départements et envisagez
            d&apos;améliorer l&apos;efficacité énergétique de votre domicile,
            Audicée est votre partenaire de confiance.
            Contactez-nous aujourd&apos;hui pour découvrir comment nous pouvons
            vous aider à réaliser des économies significatives tout en
            contribuant à la protection de l&apos;environnement.
          </p>
        </div>
        <Image
          src={france}
          alt="carte de france"
          className="w-1/2 object-contain"
        />
      </section>
    </>
  );
};
export default ListeDesDepartementsPage;
