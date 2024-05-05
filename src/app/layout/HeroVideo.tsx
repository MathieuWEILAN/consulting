"use client";

import * as React from "react";

import maison from "../assets/img/home.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Video from "../components/Video";
import BlockLogo from "../components/blocks/BlockLogo";
const Hero = ({
  title,
  image1,
  image2,
}: {
  title?: string;
  image1?: any;
  image2?: any;
}) => {
  const [isHomepage, setIsHomepage] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== undefined) {
      if (window.location.pathname === "/") {
        setIsHomepage(true);
      }
    }
  }, []);
  return (
    <section className="section-background">
      <motion.div className="absolute top-0 z-20">
        <motion.div className="flex justify-center items-center h-[700px] w-screen flex-col z-20 space-y-10 relative">
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
              {title ? title : "HOMEPAGE"}
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
      <Video />
    </section>
  );
};
export default Hero;
