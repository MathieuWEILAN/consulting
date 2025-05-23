"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Video from "../components/Video";
import logo from "../assets/img/audicee-logo-sans-texte.png";
const Hero = ({ title, image1 }: { title?: string; image1?: any }) => {
  return (
    <section className="section-background">
      <motion.div className="absolute top-0 z-20 left-1/2 -translate-x-1/2 mx-auto">
        <motion.div className="flex justify-center items-center h-[700px] w-screen max-w-[2000px] flex-col z-20 space-y-10 relative mt-12 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="flex flex-col items-center pb-20"
          >
            <Image
              src={image1 ? image1 : logo}
              alt="Vercel Logo"
              width={700}
              height={400}
              className="max-w-[200px] sm:max-w-[800px] max-h-[400px] object-contain mx-auto"
            />
            <h1 className="text-white uppercase tracking-widest flex flex-col items-center">
              <span className="text-white text-[50px] lg:text-[70px]">
                Audicée
              </span>
              <br />
              {title}
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
      <Video />
    </section>
  );
};
export default Hero;
