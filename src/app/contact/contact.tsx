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
        <div className="my-10 lg:px-20 flex flex-col lg:flex-row justify-between">
          <div>
            <p className="underline">Téléphone : </p>
            <a
              href="tel:0186223185"
              className="hover:underline transition-colors"
            >
              <span>01 86 22 31 85</span>
            </a>
            <p className="underline">Email : </p>
            <a
              href="mailto:auditenergie77@gmail.com"
              className="hover:underline transition-colors"
            >
              <span>auditenergie77@gmail.com</span>
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
          <iframe
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.9214616995155!2d2.7957320500000002!3d48.840636749999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e602b60e703b3d%3A0x178020d5d986b2ba!2s7%20Av.%20Christian%20Doppler%2C%2077700%20Serris!5e0!3m2!1sfr!2sfr!4v1758704129599!5m2!1sfr!2sfr"
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
export default Contact;
