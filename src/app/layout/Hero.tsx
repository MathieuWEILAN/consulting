"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import maison from "../assets/img/maison.png";
import photo1 from "../assets/img/photo1.jpg";
import photo2 from "../assets/img/photo2.jpg";
import photo3 from "../assets/img/photo3.jpg";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface HeroImg {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}
interface HeroState {
  img: HeroImg;
  title: string;
  texte: string;
  id: number;
}
const arrayOfImage: HeroState[] = [
  { img: maison, title: "Panneaux", texte: "image 4", id: 0 },

  {
    img: photo1,
    title: "Panneaux",
    texte:
      "Vous ne savez pas quels travaux effectuer mais souhaitez rendre votre logement moins énergivore ? Inscrivez vous, un conseiller vous guidera tout au long de vos démarches",
    id: 1,
  },
  {
    img: photo2,
    title: "Rénovation",
    texte:
      "L’isolation de votre maison par l’extérieur est un bon choix pour les propriétaires qui souhaitent augmenter l’efficacité énergétique et le confort de leur maison.",
    id: 2,
  },
  {
    img: photo3,
    title: "Ballon",
    texte:
      "Dans le cadre de la transition énergétique, les ballons thermodynamiques sont fortement sollicitées pour la rénovation des bâtiments.",
    id: 3,
  },
];
const Hero = () => {
  const [animate, setAnimate] = React.useState<boolean>(false);

  const handleAnimate = () => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  };
  return (
    <section className="w-full h-[700px] relative mt-10 pb-0">
      <Swiper
        className="h-full w-full absolute top-0"
        slidesPerView={1}
        onSlideChange={handleAnimate}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {arrayOfImage.map((el, i) => {
          return (
            <SwiperSlide key={i} className="relative">
              <Image
                src={el.img.src}
                alt="Vercel Logo"
                width={700}
                height={24}
                priority
                className={`h-full w-full object-cover bg-white object-center ${
                  animate ? "animate-scale-down" : ""
                }`}
              />
              <div
                className={`z-10 absolute lg:bottom-1/2 lg:translate-y-1/2 lg:right-[10%] h-auto w-80 rounded-lg bg-slate-950 shadow-xl bg-opacity-90
                }`}
              >
                <h2
                  className={`text-3xl text-center my-4 uppercase text-slate-50`}
                >
                  {el.title}
                </h2>
              </div>
            </SwiperSlide>
          );
        })}
        <div
          tabIndex={0}
          className="swiper-button-prev !w-14 !h-14 rounded-full !bg-opacity-80 !bg-slate-50 !text-green-800"
        ></div>
        <div
          tabIndex={0}
          className="swiper-button-next !w-14 !h-14 rounded-full !bg-opacity-80 !bg-slate-50 !text-green-800"
        ></div>
      </Swiper>
    </section>
  );
};
export default Hero;
