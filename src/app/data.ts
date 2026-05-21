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
  image?: string;
  title?: string;
  text?: string;
  href?: string;
};

export type CommentsCardType = {
  comment: string;
  firstName: string;
  lastName: string;
  photo?: string;
  stars: number;
};

export const menu: MenuItem[] = [
  {
    titleName: "Accueil",
    titleHref: "/",
    arraySubmenu: [],
  },
  {
    titleName: "Audits",
    titleHref: "/audits",
    arraySubmenu: [],
  },
  {
    titleName: "Mon Accompagnateur Rénov'",
    titleHref: "/mon-accompagnateur-renov",
    arraySubmenu: [],
  },

  {
    titleName: "Contact",
    titleHref: "/contact",
    arraySubmenu: [],
  },
];

export const arrayCards = [
  {
    image:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376428/step1_bllzhc.webp",
    title: "ÉTUDE ÉNERGÉTIQUE",
    text: "Nous réalisions une étude complète de votre habitat avec un de nos experts énergétiques puis et envoyons instantanément votre étude et le devis détaillé de votre projet aides déduites.",
  },
  {
    image:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/step3_jdv5gl.webp",
    title: "ACCOMPAGNER VOS DÉMARCHES",
    text: "Nous gérons vos demandes pour maximiser vos aides financières.",
  },
  {
    image:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376580/step2_n0hqy5.webp",
    title: "ÊTRE VITRE TIERS DE CONFIANCE",
    text: "Nous sommes le lien direct entre vous, les artisans et les financeurs, sans stresse.",
  },

  {
    image:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779375114/check_rmnpse.webp",
    title: "FOURNIR DES PRÉCONISATIONS PERSONNALISÉES",
    text: "Nous adaptons des solutions personnalisées pour réduire vos factures et améliorer votre confort.",
  },
];

export const prestationCards = [
  {
    image:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376428/step1_bllzhc.webp",
    title: "Expertise Technique",
    text: "Notre équipe d'experts est composée de professionnels chevronnés possédant une connaissance approfondie des meilleures pratiques en matière d'efficacité énergétique.",
    // href: "/lala",
  },
  {
    image:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/photo2_e5meys.webp",
    title: "Solutions Personnalisées",
    text: "Nous comprenons que chaque entreprise est unique, c'est pourquoi nous développons des solutions sur mesure adaptées à vos besoins spécifiques.",
    // href: "/lolo",
  },
  {
    image:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/photo2_e5meys.webp",
    title: "Engagement envers l’Environnement",
    text: "Chez Audicée, nous sommes fiers de notre engagement envers la durabilité environnementale. En travaillant avec nous, vous contribuez à un avenir plus vert pour tous.",
    // href: "/lele",
  },
];

export const homePageWhy = [
  {
    // image: step1,
    title: "Expertise technique approfondie",
    text: "Un professionnel possède les connaissances techniques pour analyser de manière les performances énergétiques actuelles de votre habitation. Grâce à des outils spécialisés et à son expertise, l'auditeur peut identifier précisément où et comment votre maison perd de l'énergie et vous proposer les solutions les plus adaptées pour y remédier.",
  },
  {
    // image: photo2,
    title: "Conseils personnalisés",
    text: "Un auditeur énergétique prendra en compte les spécificités de votre maison ainsi que vos besoins personnels pour vous recommander des mesures personnalisées. Que ce soit l'isolation, le chauffage, la ventilation, ou l'utilisation d'énergies renouvelables, vous aurez un plan sur mesure qui maximise les bénéfices énergétiques.",
  },
  {
    // image: trees,
    title: "Économies à long terme",
    text: "L'accompagnement par un professionnel garantit que des investissements judicieux. En ciblant les interventions qui offriront le meilleur retour sur investissement, un auditeur énergétique vous aide à réduire durablement vos factures d'énergie.",
  },
  {
    // image: trees,
    title: "Accès à des aides financières",
    text: "De nombreuses subventions et aides financières sont disponibles pour encourager les rénovations énergétiques. Un professionnel de l'audit énergétique est à jour avec les dernières informations et peut vous guider dans le processus d'obtention de ces aides, en s'assurant que votre projet respecte les critères requis.",
  },
  {
    // image: trees,
    title: "Contribution à la protection de l'environnement",
    text: "En réduisant la consommation énergétique de votre maison, vous contribuez activement à la lutte contre le changement climatique. L'audit énergétique vous aide à faire des choix qui non seulement améliorent votre cadre de vie mais aussi réduisent votre empreinte écologique.",
  },
  {
    // image: trees,
    title: "Assurance de qualité et de conformité",
    text: "Les professionnels de l'audit énergétique veillent à ce que toutes les interventions respectent les normes en vigueur. Cela vous assure non seulement une tranquillité d'esprit mais garantit également la sécurité et la conformité de votre habitation.",
  },
];

export const commentsCards: CommentsCardType[] = [
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de panneaux solaires",
    firstName: "Mathieu",
    lastName: "WEILAN",
    photo:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/photo2_e5meys.webp",
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de panneaux solaires",
    firstName: "lele",
    lastName: "MAMA",
    photo:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/photo2_e5meys.webp",
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    firstName: "lalal",
    lastName: "lele",
    photo:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/photo2_e5meys.webp",
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    firstName: "lalal",
    lastName: "lele",
    photo:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/photo2_e5meys.webp",
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    firstName: "lalal",
    lastName: "lele",
    photo:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/photo2_e5meys.webp",
    stars: 5,
  },
  {
    comment:
      "Nous vous assistons dans le devis et l'installation de pompe à chaleur afin de  chauffer écologiquement votre habitat.",
    firstName: "lalal",
    lastName: "lele",
    photo:
      "https://res.cloudinary.com/df1icoftf/image/upload/v1779376579/photo2_e5meys.webp",
    stars: 5,
  },
];
