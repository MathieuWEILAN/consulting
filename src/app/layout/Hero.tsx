"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DEFAULT_HERO_IMAGE =
  "https://res.cloudinary.com/df1icoftf/image/upload/v1779377033/home-min_uprjpe.webp";

const Hero = ({
  title,
  image1,
  image2,
  children,
}: {
  title?: string;
  image1?: string;
  image2?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className="section-background relative">
      <div className="relative w-full h-[650px] lg:h-[700px]">
        <Image
          src={image2 ?? DEFAULT_HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <motion.div className="absolute inset-0 z-20">
        <motion.div className="flex justify-center items-center h-[650px] lg:h-[700px] w-screen max-w-[2000px] flex-col z-20 space-y-10 relative mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            {image1 && (
              <Image
                src={image1}
                alt=""
                width={400}
                height={120}
                className="h-auto w-auto max-w-[200px] lg:max-w-[400px] max-h-[300px] object-contain mx-auto mb-10"
              />
            )}
            <h1 className="text-white uppercase tracking-widest text-center w-full block">
              {title ? title : ""}
            </h1>
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
