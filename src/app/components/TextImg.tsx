// Code for TextImg component
import React from "react";
import { motion, Variants } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Link from "next/link";

const TextImg = ({
  text,
  img,
  className,
  title,
  textLink,
  link,
  order,
}: {
  text: string;
  img: StaticImageData;
  className?: string;
  title?: string;
  textLink?: string;
  link?: string;
  order?: string;
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 440) {
      setIsMobile(true);
    }
  }, []);
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

  const xVariants: Variants = {
    offscreen: {
      x: order === "right" ? 50 : -50,
    },
    onscreen: {
      x: 0,
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
        className=" w-full flex flex-col lg:flex-row items-center justify-center mx-auto bg-slate-50"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div
          variants={upVariants}
          className={`${
            order === "right" ? "order-2" : "order-1"
          } w-full lg:w-1/2 px-4 py-10 lg:p-20 text-xl flex flex-col items-end justify-center`}
        >
          {title && <motion.h2 className="w-full">{title}</motion.h2>}
          <motion.p className="w-full text-xl">{text}</motion.p>
          {link && (
            <Link href={link} className="w-fit hover:underline mt-10">
              {textLink}
            </Link>
          )}
        </motion.div>
        <Image
          src={img}
          width={1200}
          height={700}
          alt=""
          className={`w-full lg:w-1/2 ${className} max-h-[700px] object-contain z-10 ${
            order === "right" ? "order-1" : "order-2"
          }`}
        />
      </motion.div>
    </section>
  );
};

export default TextImg;
