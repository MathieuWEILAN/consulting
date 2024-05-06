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
          Accompagnateur Rénov' et de l'aide financière de MaPrimeRénov.
          Contactez-nous dès aujourd'hui pour en savoir plus sur nos services et
          découvrir comment nous pouvons vous aider à concrétiser vos projets de
          rénovation énergétique.
        </p>
        <div className="my-10 lg:px-20">
          {" "}
          <p className="underline">Téléphone : </p>
          <span>01 02 04 04 06</span>
          <p className="underline">Email : </p>
          <a href="mailto:contact@audicee.fr">contact@audicee.fr</a>
        </div>
      </section>
    </>
  );
};
export default Contact;
