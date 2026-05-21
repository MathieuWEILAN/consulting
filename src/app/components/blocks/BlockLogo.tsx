"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const BlockLogo = ({ className }: { className?: string }) => {
  return (
    <section className={`w-full ${className} bg-primaryBlue`}>
      <motion.div
        className="w-full mx-auto grid grid-cols-5 py-5 container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <Image
          src={
            "https://res.cloudinary.com/df1icoftf/image/upload/v1779374684/mar-nobg_dylqtr.webp"
          }
          width={100}
          height={100}
          alt="Certifié Mon Accompagnateur Rénov'"
          className="w-auto lg:w-auto h-10 lg:h-20 object-contain bg-white rounded-lg mx-auto"
        />
        <Image
          src={
            "https://res.cloudinary.com/df1icoftf/image/upload/v1779374653/mpr-bg_jevfax.webp"
          }
          width={100}
          height={100}
          alt="Partenaire MaPrimeRénov"
          className="w-auto lg:w-auto h-10 lg:h-20 object-contain bg-white p-2.5 rounded-lg mx-auto"
        />{" "}
        <Image
          src={
            "https://res.cloudinary.com/df1icoftf/image/upload/v1779374590/opqibi-numero_pbofoy.webp"
          }
          width={100}
          height={100}
          alt="Certifié OPQIBI"
          className="w-auto lg:w-auto h-10 lg:h-20 object-contain rounded-lg mx-auto"
        />{" "}
        <Image
          src={
            "https://res.cloudinary.com/df1icoftf/image/upload/v1779374485/RGE_y0o5f9.webp"
          }
          width={100}
          height={100}
          alt="Label RGE - Reconnu Garant de l'Environnement"
          className="w-auto lg:w-full h-10 lg:h-20 object-contain mx-auto"
        />{" "}
        <Image
          src={
            "https://res.cloudinary.com/df1icoftf/image/upload/v1779374384/anah_lupmve.webp"
          }
          width={100}
          height={100}
          alt="Partenaire ANAH"
          className="w-auto lg:w-auto h-10 lg:h-20 object-contain bg-white p-2.5 rounded-lg mx-auto"
        />
      </motion.div>
    </section>
  );
};
export default BlockLogo;
