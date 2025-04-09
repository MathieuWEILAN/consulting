"use client";

import Hero from "../layout/Hero";
import contact from "../assets/img/contact.jpg";
import Image from "next/image";
const Contact = () => {
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
        <div className="my-10 lg:px-20">
          <p className="underline">Téléphone : </p>
          <a
            href="tel:0186223185"
            className="hover:underline transition-colors"
          >
            <span>01 86 22 31 85</span>
          </a>
          <p className="underline">Email : </p>
          <a
            href="mailto:contact@audicee.fr"
            className="hover:underline transition-colors"
          >
            <span>contact@audicee.fr</span>
          </a>
          <p className="underline">Adresse : </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=7+avenue+Christian+Doppier+77600+Serris"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-colors"
          >
            <span>7 avenue Christian Doppier, 77600 Serris</span>
          </a>
        </div>
      </section>
    </>
  );
};
export default Contact;
