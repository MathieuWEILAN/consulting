"use client";

import { motion } from "framer-motion";
import Video from "../components/Video";

const HeroVideo = ({ title }: { title?: string }) => {
  return (
    <section className="section-background">
      <motion.div className="absolute top-0 z-20 left-1/2 -translate-x-1/2 mx-auto">
        <motion.div className="flex justify-center items-center h-[700px] w-screen max-w-[2000px] flex-col z-20 space-y-10 relative mt-12 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="flex flex-col items-center lg:pb-10 space-y-6"
          >
            {title && (
              <h1 className="text-white text-center text-2xl lg:text-6xl font-bold tracking-widest uppercase px-4 max-w-xl">
                {title}
              </h1>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
      <Video />
    </section>
  );
};
export default HeroVideo;
