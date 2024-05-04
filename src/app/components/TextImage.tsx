import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const TextImage = ({
  title,
  text,
  image,
  order,
  backgroundImg,
  classImg,
  link,
  textLink,
}: {
  title?: string;
  text?: string;
  image: StaticImageData;
  order?: string;
  backgroundImg?: string;
  classImg?: string;
  link?: string;
  textLink?: string;
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 440) {
      setIsMobile(true);
    }
  }, []);
  const upVariants: Variants = {
    offscreen: {
      y: 50,
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
      x: order === "right" ? 250 : -250,
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
    <section className={`w-full ${backgroundImg}`}>
      <div className={`container mx-auto p-5 lg:p-10 `}>
        <h2 className="flex items-center justify-center">{title}</h2>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          className="flex items-center justify-center lg:my-10 flex-col lg:flex-row"
        >
          <motion.div
            variants={xVariants}
            className={`${
              order === "right" ? "order-1 lg:-mr-6" : "order-2 lg:-ml-6"
            }`}
          >
            <Image
              src={image}
              width={300}
              height={400}
              alt=""
              className={`rounded-lg shadow-xl ${classImg}`}
            />
          </motion.div>
          <motion.div
            variants={upVariants}
            className={`w-full lg:w-1/2 rounded-lg bg-stone-50 shadow-xl p-6 flex flex-col justify-end items-end lg:p-12 z-10 ${
              order === "right" ? "order-2" : "order-1"
            }`}
          >
            <p className="w-full">{text}</p>
            {link && (
              <Link
                href={link}
                className="w-fit text-lg hover:underline mt-2.5"
              >
                {textLink ? textLink : "En savoir plus"}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default TextImage;
