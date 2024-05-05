import React from "react";
import monAccompagnateurRenov from "../../assets/img/mar-nobg.webp";
import maPrimRenov from "../../assets/img/mpr-bg.png";
import opqibi from "../../assets/img/opqibi.jpeg";
import rge from "../../assets/img/RGE.png";
import anah from "../../assets/img/anah.png";
import Image from "next/image";
import { motion } from "framer-motion";
const BlockLogo = ({ className }: { className?: string }) => {
  return (
    <section className={`w-full ${className ? className : "bg-primaryBlue"}`}>
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
          src={monAccompagnateurRenov}
          width={100}
          alt=""
          className="w-16 lg:w-auto max-h-20 object-contain bg-white rounded-lg mx-auto"
        />
        <Image
          src={maPrimRenov}
          width={100}
          alt=""
          className="w-16 lg:w-auto max-h-20 object-contain bg-white p-2.5 rounded-lg mx-auto"
        />{" "}
        <Image
          src={opqibi}
          width={100}
          alt=""
          className="w-16 lg:w-auto max-h-20 object-contain rounded-lg mx-auto"
        />{" "}
        <Image
          src={rge}
          width={100}
          alt=""
          className="w-16 lg:w-full max-h-20 object-contain mx-auto"
        />{" "}
        <Image
          src={anah}
          width={100}
          alt=""
          className="w-16 lg:w-auto max-h-20 object-contain bg-white p-2.5 rounded-lg mx-auto"
        />
      </motion.div>
    </section>
  );
};
export default BlockLogo;
