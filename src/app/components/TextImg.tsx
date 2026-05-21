"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Link from "next/link";

const TextImg = ({
  text,
  img,
  alt,
  className,
  title,
  textLink,
  link,
  order,
  children,
}: {
  text?: string;
  img: StaticImageData;
  alt?: string;
  className?: string;
  title?: string;
  textLink?: string;
  link?: string;
  order?: string;
  children?: React.ReactNode;
}) => {
  const upVariants: Variants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
      },
    },
  };

  return (
    <section className="w-full h-full">
      <motion.div
        className="w-full flex flex-col lg:flex-row items-center justify-center bg-slate-50"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          variants={upVariants}
          className={`${
            order === "right" ? "order-2" : "order-1"
          } w-full lg:w-1/2 px-4 py-10  lg:p-10 xl:p-20 text-xl flex flex-col items-end justify-center`}
        >
          {children}
          {link && (
            <Link href={link} className="w-fit mt-10 relative group">
              {textLink}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black" />
            </Link>
          )}
        </motion.div>
        <Image
          src={img}
          alt={alt ?? ""}
          loading="lazy"
          placeholder="blur"
          className={`${className} w-full lg:w-1/2 lg:h-full object-cover object-center z-10 ${
            order === "right" ? "order-1" : "order-2"
          }`}
        />
      </motion.div>
    </section>
  );
};

export default TextImg;
