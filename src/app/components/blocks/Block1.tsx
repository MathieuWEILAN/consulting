import Card from "../Card";
import { StaticImageData } from "next/image";

type CardType = {
  image: StaticImageData;
  title: string;
  text: string;
};

const Block1 = ({ array }: { array: CardType[] }) => {
  return (
    <section className="block1 w-full mx-auto pt-0 lg:my-10">
      <h2 className="lg:container mx-auto p-5 lg:p-10 lg:px-0">
        Nous vous accompagnons dans chaque étape de votre projet de rénovation
      </h2>
      <div className="flex my-2.5 w-full h-full overflow-auto pt-2.5 pb-6 scrollbar-hide container mx-auto">
        {array.map((el, i) => {
          const step = i + 1;
          return (
            <Card
              key={i}
              text={el.text}
              image={el.image}
              title={el.title}
              step={step}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Block1;
