import Image from "next/image";
import { StaticImageData } from "next/image";

const CardPrestations = ({
  image,
  text,
  title,
  href,
}: {
  image: StaticImageData;
  text: string;
  title: string;
  href: string;
}) => {
  return (
    <div className="h-[560px] w-full bg-green-100 rounded-lg overflow-hidden relative shadow-xl mx-auto my-5">
      <Image
        src={image.src}
        alt="Vercel Logo"
        width={700}
        height={24}
        priority
        className={`h-full w-full object-cover bg-white object-center`}
      />
      <div
        className={`bg-slate-50 w-full absolute bottom-0 group flex justify-start items-center p-4 flex-col h-56`}
      >
        <h3 className="text-left w-full uppercase">{title}</h3>
        <span>{text}</span>
      </div>
    </div>
  );
};
export default CardPrestations;
