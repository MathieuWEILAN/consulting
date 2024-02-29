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
