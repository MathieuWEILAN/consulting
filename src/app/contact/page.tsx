import { Metadata } from "next";
import Hero from "../layout/Hero";
import contact from "../assets/img/contact.jpg";
import { company } from "../config";

export const metadata: Metadata = {
  title: "Contact Audit Énergétique | Devis Gratuit Ma Prime Rénov",
  description: "Contactez nos experts audit énergétique en Île-de-France. Devis gratuit, accompagnement Ma Prime Rénov, conseil personnalisé. ☎️ 01-86-22-31-85 - Réponse sous 24h.",
  keywords: "contact audit énergétique, devis gratuit rénovation énergétique, Ma Prime Rénov contact, expert énergétique Île-de-France, accompagnateur rénov contact, diagnostic énergétique devis",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Expert Audit Énergétique | Devis Gratuit Île-de-France",
    description: "Obtenez votre devis gratuit d'audit énergétique. Experts certifiés Ma Prime Rénov en Île-de-France. Contact immédiat.",
    url: "/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <Hero image2={contact} title="Contactez-nous" />
      <section className="container py-10 mx-auto">
        <p className="lg:px-20">
          Faites confiance à Audicée pour vous accompagner vers une rénovation
          énergétique réussie et bénéficiez des avantages de notre agrément Mon
          Accompagnateur Rénov&apos; et de l&apos;aide financière de
          MaPrimeRénov. Contactez-nous dès aujourd&apos;hui pour en savoir plus
          sur nos services et découvrir comment nous pouvons vous aider à
          concrétiser vos projets de rénovation énergétique.
        </p>
        <div className="my-10 lg:px-20 flex flex-col lg:flex-row justify-between">
          <div>
            <p className="underline">Téléphone : </p>
            <a
              href={`tel:${company.phone.tel}`}
              className="hover:underline transition-colors"
            >
              <span>{company.phone.display}</span>
            </a>
            <p className="underline">Email : </p>
            <a
              href={`mailto:${company.email.public}`}
              className="hover:underline transition-colors"
            >
              <span>{company.email.public}</span>
            </a>
            <p className="underline">Adresse : </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${company.address.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              <span>
                {company.address.street}, {company.address.postalCode}{" "}
                {company.address.city}
              </span>
            </a>
          </div>
          <iframe
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            src={company.address.mapsEmbed}
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
