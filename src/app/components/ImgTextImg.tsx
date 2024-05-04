import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const ImgTextImg = ({
  img1,
  img2,
  text,
  title,
  link,
}: {
  img1: StaticImageData;
  img2: StaticImageData;
  text: string;
  title: string;
  link?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [leftEffect, setLeftEffect] = useState(300);
  const [rightEffect, setRightEffect] = useState(-300);

  useEffect(() => {
    if (window.innerWidth < 440) {
      setIsMobile(true);
      setLeftEffect(2);
      setRightEffect(-2);
    }
  }, []);
  const insideToLeft: Variants = {
    offscreen: {
      x: !isMobile ? leftEffect : "",
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
  const insideToRight: Variants = {
    offscreen: {
      x: !isMobile ? rightEffect : "",
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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="lg:container w-full flex items-center justify-center flex-col mx-auto px-5 lg:px-0py-10 bg-slate-50 h-auto"
    >
      <h2>{title}</h2>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-10">
        <motion.div variants={insideToLeft}>
          <Image
            src={img1}
            width={300}
            height={300}
            alt=""
            className="rounded-lg shadow-xl bg-[#FCFEFF] p-10 object-contain lg:-mr-2.5"
          />
        </motion.div>
        <div className="rounded-lg shadow-xl p-10 lg:px-20 lg:py-10 w-full lg:w-1/2 z-10 bg-slate-50">
          <p>{text}</p>
          {link && <Link href={link}>En savoir plus</Link>}
        </div>
        <motion.div variants={insideToRight}>
          <Image
            src={img2}
            width={300}
            height={300}
            alt=""
            className="rounded-lg shadow-xl object-contain lg:-ml-2.5"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImgTextImg;
