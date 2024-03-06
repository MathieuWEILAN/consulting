import Card from "../Card";
import hero1 from "../../assets/img/hero1.png";
import hero2 from "../../assets/img/hero2.png";
import hero3 from "../../assets/img/hero3.jpg";

type CardType = {
  image: object;
  title: string;
  text: string;
  href: string;
};

const Block1 = ({ array }: { array: CardType }) => {
  return (
    <section className="block1 w-full mx-auto pt-0">
      <h2 className="container mx-auto py-4">
        Les étapes dun projet de rénovation energetique reussi
      </h2>
      <div className="flex my-2.5 lg:my-10 w-full h-full overflow-auto pt-2.5 pb-6 lg:py-10 scrollbar-hide container mx-auto">
        {array.map((el, i) => {
          const step = i + 1;
          return (
            <Card
              key={i}
              text={el.text}
              image={el.image}
              title={el.title}
              href={el.href}
              step={step}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Block1;
