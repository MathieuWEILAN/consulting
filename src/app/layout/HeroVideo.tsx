"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Video from "../components/Video";
const Hero = ({ title, image1 }: { title?: string; image1?: any }) => {
  return (
    <section className="section-background">
      <motion.div className="absolute top-0 z-20 left-1/2 -translate-x-1/2">
        <motion.div className="flex justify-center items-center h-[700px] w-screen max-w-[2000px] flex-col z-20 space-y-10 relative mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <Image
              src={image1 ? image1 : "/vercel.svg"}
              alt="Vercel Logo"
              width={400}
              height={24}
              className="max-w-[200px] lg:max-w-[400px] max-h-[300px] object-contain mx-auto mb-10"
            />
            <h1 className="text-white uppercase tracking-widest container mx-auto">
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
