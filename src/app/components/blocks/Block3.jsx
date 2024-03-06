import Card from "../Card";
import Image from "next/image";
import Button from "../Button";
import hero3 from "../../assets/img/hero3.jpg";
import maison from "../../assets/img/maison.png";

const Block3 = () => {
  return (
    <section className="block3 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row h-full py-10">
        {" "}
        <div className="w-full lg:w-1/2 flex flex-col items-start h-auto relative">
          <h2 className="w-full flex items-start text-left">
            Votre partenaire solution vers la transition energetique
          </h2>
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fuga
            ipsam illum ea itaque similique accusamus incidunt quidem velit
            voluptatum in quam blanditiis, architecto odio dolor numquam neque
            quod! Vel?
          </p>
          <Button text="en savoir plus" className="my-4" />
        </div>
        <Image
          src={maison.src}
          alt="Vercel Logo"
          width={700}
          height={24}
          priority
          className={`h-96 w-full lg:w-1/2 object-contain bg-white object-center`}
        />
      </div>
    </section>
  );
};

export default Block3;
