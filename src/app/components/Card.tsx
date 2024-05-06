import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";

const Card = ({
  image,
  text,
  title,
  key,
  step,
}: {
  image: StaticImageData;
  text: string;
  title: string;
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
      <div
        className={`bg-slate-50 w-full absolute bottom-0 bg-opacity-90 group flex items-center p-4 flex-col transition-all ease-in-out duration-500 ${
          isHovered ? "max-h-96" : "max-h-24 h-24 justify-center"
        }`}
      >
        <h3 className="text-left w-full">{title}</h3>

        {isHovered && <span>{text}</span>}
      </div>
    </div>
  );
};

export default Card;
