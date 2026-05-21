import { company, siteConfig } from "../config";

interface ServiceData {
  name?: string;
  description?: string;
}

interface StructuredDataProps {
  type: "organization" | "service" | "localBusiness";
  data?: ServiceData;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const baseUrl = siteConfig.baseUrl;

  const getSchema = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: company.name,
          description:
            "Expert en audit et rénovation énergétique en Île-de-France",
          url: baseUrl,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/audicee-logo.png`,
            width: "300",
            height: "100",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: company.phone.schema,
            contactType: "customer service",
            areaServed: {
              "@type": "AdministrativeArea",
              name: company.address.region,
            },
            availableLanguage: "French",
          },
          address: {
            "@type": "PostalAddress",
            addressRegion: company.address.region,
            addressCountry: company.address.country,
          },
          foundingDate: company.foundingYear,
          knowsAbout: [
            "Audit énergétique",
            "Rénovation énergétique",
            "Ma Prime Rénov",
            "Diagnostic de performance énergétique",
            "Accompagnement rénov",
          ],
        };

      case "localBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${baseUrl}/#localbusiness`,
          name: company.name,
          image: `${baseUrl}/panneaux.jpg`,
          telephone: company.phone.schema,
          email: company.email.contact,
          priceRange: company.priceRange,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.address.street,
            addressLocality: company.address.city,
            postalCode: company.address.postalCode,
            addressRegion: company.address.region,
            addressCountry: company.address.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: company.geo.latitude,
            longitude: company.geo.longitude,
          },
          url: baseUrl,
          openingHours: company.openingHours,
          serviceArea: [
            {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: company.geo.latitude,
                longitude: company.geo.longitude,
              },
              geoRadius: "50000",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services d'audit et rénovation énergétique",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Audit énergétique",
                  description:
                    "Audit complet de performance énergétique de votre logement",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Accompagnement Ma Prime Rénov",
                  description:
                    "Accompagnement complet pour vos démarches Ma Prime Rénov",
                },
              },
            ],
          },
        };

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${baseUrl}/#service`,
          name: data?.name ?? "Services d'audit énergétique",
          description:
            data?.description ??
            "Services professionnels d'audit et de rénovation énergétique en Île-de-France",
          provider: {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
          },
          areaServed: {
            "@type": "State",
            name: company.address.region,
          },
          serviceType: "Audit énergétique",
          offers: {
            "@type": "Offer",
            availability: "InStock",
            validFrom: new Date().toISOString().split("T")[0],
          },
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
    />
  );
};

export default StructuredData;
