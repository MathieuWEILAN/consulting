export const company = {
  name: "Audicée",
  phone: {
    display: "01 86 22 31 85",
    tel: "0186223185",
    schema: "+33-1-86-22-31-85",
  },
  email: {
    public: "auditenergie77@gmail.com",
    contact: "contact@audicee.fr",
  },
  address: {
    street: "7 avenue Christian Doppier",
    postalCode: "77600",
    city: "Serris",
    region: "Île-de-France",
    country: "FR",
    mapsQuery: "7+avenue+Christian+Doppier+77600+Serris",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.9214616995155!2d2.7957320500000002!3d48.840636749999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e602b60e703b3d%3A0x178020d5d986b2ba!2s7%20Av.%20Christian%20Doppler%2C%2077700%20Serris!5e0!3m2!1sfr!2sfr!4v1758704129599!5m2!1sfr!2sfr",
  },
  geo: { latitude: 48.840636, longitude: 2.795732 },
  foundingYear: "2020",
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "€€",
} as const;

export const siteConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://audicee.fr",
} as const;
