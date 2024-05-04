"use client";

import * as React from "react";

import maison from "../assets/img/home.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

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

const Hero = ({
  title,
  image1,
  image2,
}: {
  title?: string;
  image1?: any;
  image2?: any;
}) => {
  return (
    <section className="section-background">
      <motion.div className="absolute top-0 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="flex justify-center items-center h-[700px] w-screen flex-col z-20"
        >
          <Image
            src={image1 ? image1 : "/vercel.svg"}
            alt="Vercel Logo"
            width={400}
            height={24}
            className="max-w-[400px] max-h-[300px] object-cover"
          />
          <div className="text-[48px] mt-10 text-white">
            {title ? title : "HOMEPAGE"}
          </div>
        </motion.div>
      </motion.div>
      <Image
        src={image2 ? image2 : maison}
        alt="Vercel Logo"
        width={1500}
        height={24}
        priority
        className={`h-full w-screen overflow-hidden object-cover bg-white object-center hero-effect`}
      />
    </section>
  );
};
export default Hero;
