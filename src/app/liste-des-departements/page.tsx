import Hero from "../layout/Hero";
import paris from "../assets/img/paris.jpg";
import Image from "next/image";
import france from "../assets/img/france.png";

const ListeDesDepartementsPage = () => {
  return (
    <>
      <Hero image2={paris} title="Liste des départements" />
      <section className="flex flex-col items-center">
        <div className="container mx-auto p-5 lg:p-20">
          <h2>Nos Zones d&apos;Intervention en France</h2>
          <p>
            Chez [Nom de l&apos;Entreprise], nous sommes fiers de fournir des
            services d&apos;audit et de rénovation énergétique de premier plan à
            travers de nombreux départements en France, avec une présence forte
            et stratégique en Île-de-France.
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
            [Nom de l&apos;Entreprise] est votre partenaire de confiance.
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
