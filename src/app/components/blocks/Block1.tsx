import Card from "../Card";

type CardType = {
  image: string;
  title: string;
  text: string;
};

const Block1 = ({ array }: { array: CardType[] }) => {
  return (
    <section className="block1 pt-0 my-10 container mx-auto">
      <h2 className="p-5 lg:p-10">
        Nous vous accompagnons dans chaque étape de votre projet de rénovation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
