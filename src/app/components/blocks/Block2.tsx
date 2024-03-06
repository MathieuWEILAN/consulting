import Card from "../Card";
import Image from "next/image";
import Button from "../Button";

type CardType = {
  image: object;
  title: string;
  text: string;
  href?: string;
};

const Block2 = ({ array }: { array: CardType }) => {
  return (
    <section className="block2 w-full split-bg-right mx-auto">
      <h2 className="container mx-auto">Ce que nous proposons</h2>
      <div className="lg:flex my-10 w-full gap-5 container mx-auto">
        {array.map((el, i) => {
          return (
            <CardPrestations
              key={i}
              text={el.text}
              image={el.image}
              title={el.title}
              href={el.href}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Block2;

const CardPrestations = ({
  image,
  text,
  title,
  href,
  key,
}: {
  image: object;
  text: string;
  title: string;
  href: string;
  key: number;
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
        className={`bg-slate-50 w-full absolute bottom-0 group flex justify-start items-center p-4 flex-col h-48`}
      >
        <h3 className="text-left w-full uppercase">{title}</h3>
        <span>{text}</span>
      </div>
    </div>
  );
};
