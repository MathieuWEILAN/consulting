import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Icon = ({
  img,
  title,
  text,
  subTitle,
}: {
  img: StaticImageData;
  title: string;
  text: string;
  subTitle?: string;
}) => {
  const opacity: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col items-center py-4 w-full lg:w-1/3"
      variants={opacity}
    >
      <div className="w-full flex flex-col items-center lg:mb-10 lg:mb-0">
        <div className="border-2 border-black rounded-full w-24 h-24 flex items-center justify-center">
          <Image src={img} alt={title} width={60} height={60} />
        </div>
        <h2 className="text-[30px] text-center lg:text-left">{title}</h2>
        <span className="italic text-base">{subTitle}</span>
      </div>
      <p className="w-full mt-2.5 lg:mt-10 lg:px-10">{text}</p>
    </motion.div>
  );
};

export default Icon;
