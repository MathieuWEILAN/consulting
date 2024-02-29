"use client";

import * as React from "react";
import BannerHero from "../assets/img/hero-homepage.jpg";
import Hero1 from "../assets/img/hero1.png";
import Hero2 from "../assets/img/hero2.png";
import Hero3 from "../assets/img/hero3.jpg";

import Image from "next/image";
interface HeroState {
  img: object;
  title: string;
  texte: string;
  id: number;
}
const arrayOfImage = [
  {
    img: Hero1,
    title: "Panneaux",
    texte:
      "test blablablablablablablablabla blablablablablabla blablablablablabla blablabla",
    id: 1,
  },
  {
    img: Hero2,
    title: "Panneaux",
    texte:
      "test blablablablablablablablabla blablablablablabla blablablablablabla blablabla",
    id: 2,
  },
  {
    img: Hero3,
    title: "Panneaux",
    texte:
      "test blablablablablablablablabla blablablablablabla blablablablablabla blablabla",
    id: 3,
  },
  { img: BannerHero, title: "Panneaux", texte: "image 4", id: 4 },
];
const Hero = () => {
  const [heroToDisplay, setHeroToDisplay] = React.useState<HeroState>(
    arrayOfImage[0]
  );
  const [animate, setAnimate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [heroToDisplay]);
  return (
    <section className="w-full h-[800px] relative mt-10">
      <div className="h-full w-full absolute top-0">
        <Image
          src={heroToDisplay.img.src}
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
          className={`h-full w-full object-cover object-center ${
            animate ? "animate-scale-down" : ""
          }`}
        />
        {/* <aside className="absolute bg-gray-950 bg-opacity-70 text-slate-50 rounded right-0 lg:right-[100px] top-1/2 h-auto w-4/5 lg:w-1/3 -translate-y-1/2 flex flex-col items-start p-10 space-y-4">
          <h2 className="text-2xl uppercase">{heroToDisplay.title}</h2>
          <p>{heroToDisplay.texte}</p>
          <ButtonComponent text="En savoir plus" />
        </aside> */}
      </div>
    </section>
  );
};
export default Hero;
