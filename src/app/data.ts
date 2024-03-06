import { ImgProps } from "next/dist/shared/lib/get-img-props";
import hero1 from "./assets/img/hero1.png";
import hero2 from "./assets/img/hero2.png";
import hero3 from "./assets/img/hero3.jpg";
import zizou from "./assets/img/téléchargement.jpeg";
import photo1 from "./assets/img/photo1.jpg";
import photo2 from "./assets/img/photo2.jpg";
import photo3 from "./assets/img/photo3.jpg";
import photo4 from "./assets/img/eau.jpg";

interface SubmenuItem {
  title: string;
  subtitle: string;
  href: string;
}

interface MenuItem {
  titleName: string;
  titleHref: string;
  arraySubmenu: Array<SubmenuItem>;
}

export type CardType = {
  image: ImgProps;
  title: string;
  text: string;
  href?: string;
};

export type CommentsCardType = {
  comment: string;
  firstName: string;
  lastName: string;
  photo?: ImgProps;
  stars: number;
};
export const menu: MenuItem[] = [
  {
    titleName: "Nos solutions",
    titleHref: "/nos-solutions",
    arraySubmenu: [
      {
        title: "Solaire",
        subtitle: "Panneaux photovoltaïques",
        href: "/panneaux-solaires",
      },
      {
        title: "Chauffage",
        subtitle: "Pompe à chaleurs air",
        href: "/chauffage",
      },
      {
        title: "Eaux sanitaires",
        subtitle: "Ballon thermodynamique",
        href: "/eaux-sanitaire",
      },
      {
        title: "Isolation",
        subtitle: "Isolation thermique par l'extérieur",
        href: "/isolation-thermique",
      },
    ],
  },
  {
    titleName: "Aides & Subventions",
    titleHref: "/aides-subventions",
    arraySubmenu: [
      {
        title: "CEE",
        subtitle: "Dispositif des CEE",
        href: "/dispositifs-cee",
      },
      {
        title: "TVA",
        subtitle: "La TVA 5,5",
        href: "/tva-55",
      },
      {
        title: "Prime autoconsommation",
        subtitle: "",
        href: "/prime-autoconsommation",
      },
    ],
  },
  {
    titleName: "Notre Groupe",
    titleHref: "/notre-groupe",
    arraySubmenu: [
      {
        title: "Notre Histoire",
        subtitle: "",
        href: "/notre-histoire",
      },
      {
        title: "Notre Equipe",
        subtitle: "",
        href: "/notre-equipe",
      },
      {
        title: "Nos Missions",
        subtitle: "",
        href: "/nos-missions",
      },
      {
        title: "Nos Engagement",
        subtitle: "",
        href: "/nos-engagements",
      },
    ],
  },
  {
    titleName: "Contact",
    titleHref: "/contact",
    arraySubmenu: [],
  },
];

export const arrayCards: CardType[] = [
  {
    image: hero1,
    title: "ÉTUDE ÉNERGÉTIQUE",
    text: "Réalisez une étude complète de votre habitat avec un de nos experts énergétiques puis recevez instantanément votre étude et le devis détaillé de votre projet aides déduites.",
    href: "/lala",
  },
  {
    image: hero2,
    title: "VISITE TECHNIQUE",
    text: "Un de nos auditeurs énergétiques se déplace à votre domicile afin de confirmer la faisabilité technique de votre projet de rénovation énergétique.",
    href: "/lolo",
  },
  {
    image: hero1,
    title: "DÉMARCHES ADMINISTRATIVES",
    text: "Un chargé de projet dédié réalise pour vous toutes les démarches nécessaires à l’obtention de vos aides ainsi que les formalités administratives pour vos travaux.",
    href: "/lele",
  },
  {
    image: hero3,
    title: "INSTALLATION",
    text: "Un de nos professionnels certifiés RGE se déplace chez vous pour réaliser vos travaux de rénovation énergétique. Vos travaux sont couverts par notre garantie décennale.",
    href: "/lili",
  },
  {
    image: hero2,
    title: "SUIVI CLIENT",
    text: "Bénéficiez d’un service client à votre écoute pour toutes vos questions durant toute la durée de vie de votre installation.",
    href: "/lulu",
  },
];

export const prestationCards: CardType[] = [
  {
    image: photo1,
    title: "PANNEAUX",
    text: "Nous vous assistons dans le devis et l'installation de panneaux solaires.",
    href: "/lala",
  },
  {
    image: photo2,
    title: "POMPES A CHALEUR",
    text: "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de mieux re-distribuer l'énergie dans votre maison.",
    href: "/lolo",
  },
  {
    image: photo4,
    title: "Chauffe eau",
    text: "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    href: "/lele",
  },
];

export const commentsCards: CommentsCardType[] = [
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de panneaux solaires",
    firstName: "Mathieu",
    lastName: "WEILAN",
    photo: zizou,
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de panneaux solaires",
    firstName: "lele",
    lastName: "MAMA",
    photo: zizou,
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    firstName: "lalal",
    lastName: "lele",
    photo: zizou,
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    firstName: "lalal",
    lastName: "lele",
    photo: zizou,
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    firstName: "lalal",
    lastName: "lele",
    photo: zizou,
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    firstName: "lalal",
    lastName: "lele",
    photo: zizou,
    stars: 5,
  },
];
