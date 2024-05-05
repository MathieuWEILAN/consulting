import CardPrestations from "../CardPrestations";

import { StaticImageData } from "next/image";

type CardType = {
  image: StaticImageData;
  title: string;
  text: string;
  href?: string;
};

const Block2 = ({ array }: { array: CardType[] }) => {
  return (
    <section className="block2 w-full mx-auto">
      <div className="lg:flex my-10 w-full gap-5 container mx-auto">
        {array.map((el, i) => {
          return (
            <CardPrestations
              key={`${i}-prestations`}
              text={el.text}
              image={el.image}
              title={el.title}
              href={el.href ? el.href : "/"}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Block2;
