"use client";
import React from "react";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Footer from "./layout/Footer";
import Block1 from "./components/blocks/Block1";
import Block2 from "./components/blocks/Block2";
import Block3 from "./components/blocks/Block3";
import Block4 from "./components/blocks/Block4";

import { arrayCards, prestationCards } from "./data";
import Button from "./components/Button";

export default function Home() {
  const handleClick = () => {
    console.log("CONTACTEZ");
  };
  return (
    <>
      <Header />
      <Hero />
      <main className="flex flex-col w-full">
        <Block3 />
        <section className="bg-green-50 py-10">
          <div className="container w-full flex items-center justify-center flex-col mx-auto">
            <h2>Contactez-nous pour votre projet de rénovation</h2>
            <Button action={handleClick} text={"Contactez-nous"} />
          </div>
        </section>
        <Block1 array={arrayCards} />
        <Block2 array={prestationCards} />
        <Block4 />
      </main>
      <Footer />
    </>
  );
}
