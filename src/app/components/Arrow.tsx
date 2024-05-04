import Image from "next/image";
import { motion, Variants } from "framer-motion";
import arrow from "../assets/icons/arrow.png";

const Arrow = () => {
  const opacity: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 100,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div variants={opacity}>
        {" "}
        <Image
          src={arrow}
          width={120}
          height={120}
          className="rotate-90"
          alt="arrow"
        />
      </motion.div>
    </motion.div>
  );
};

export default Arrow;
