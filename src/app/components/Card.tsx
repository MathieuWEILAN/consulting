import Image from "next/image";
import hero1 from "../assets/img/hero1.png";
import hero2 from "../assets/img/hero2.png";
import { useState } from "react";
import { Key } from "readline";

const Card = ({
  image,
  text,
  title,
  href,
  key,
  step,
}: {
  image: object;
  text: string;
  title: string;
  href: string;
  key: number;
  step: number;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleCardOn = () => {
    setIsHovered(true);
  };
  const handleCardOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      key={key}
      className={`w-72 h-96 flex-shrink-0 lg:shrink	rounded-lg shadow-xl relative overflow-hidden m-1 ${
        isHovered ? "shadow-lg" : "shadow-2xl"
      }`}
      onMouseEnter={handleCardOn}
      onMouseLeave={handleCardOut}
    >
      <Image
        src={image.src}
        alt="Vercel Logo"
        width={700}
        height={24}
        priority
        className={`h-full w-full object-cover bg-white object-center ${
          isHovered ? "animate-scale-up" : "animate-scale-down"
        }`}
      />
      <span
        aria-label={`etape ${step}`}
        className={`mx-auto bg-slate-950 opacity-80 bg-opacity-70 absolute rounded-full mx-auto left-1/2  -translate-x-1/2  text-slate-50 flex items-center justify-center transition-all ease-in-out duration-500 ${
          isHovered
            ? "top-[30px] w-10 h-10 border-4 text-lg"
            : "top-[110px] border-8 w-24 h-24 text-[40px]"
        }`}
      >
        {step}
      </span>
      <a href={href} aria-label={title}>
        <div
          className={`bg-slate-50 w-full absolute bottom-0 bg-opacity-90 group flex items-center p-4 flex-col transition-all ease-in-out duration-500 ${
            isHovered ? "max-h-96" : "max-h-24 h-24 justify-center"
          }`}
        >
          <h3 className="text-left w-full">
            {title}
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-950"></span> */}
          </h3>

          {isHovered && <span>{text}</span>}
        </div>
      </a>
    </div>
  );
};

export default Card;
