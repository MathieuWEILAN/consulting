import React from "react";

import Image from "next/image";
import maison from "../../assets/img/home.jpg";

const Block0 = () => {
  return (
    <section className="container mx-auto mb-10 lg:mb-0">
      <h1 className="w-full flex justify-center">
        Audicée, votre expert en Rénovation Énergétique
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto lg:my-10">
        <p className="w-full lg:w-1/2 p-5 lg:p-20 lg:rounded-lg bg-stone-50 lg:shadow-xl">
          Nous nous engageons à transformer votre maison en un foyer à la fois
          confortable et respectueux de l environnement. Spécialisés dans les
          audits énergétiques et l accompagnement personnalisé, nous vous
          guidons à chaque étape de la rénovation énergétique de votre domicile.
        </p>
        <Image
          src={maison}
          alt="Vercel Logo"
          width={400}
          height={24}
          priority
          className="rounded-lg shadow-xl lg:-ml-4 lg:-mb-20"
        />
      </div>
    </section>
  );
};

export default Block0;
