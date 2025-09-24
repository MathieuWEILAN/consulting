interface StructuredDataProps {
  type: 'organization' | 'service' | 'localBusiness';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://audicee.fr';

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "Audicée",
          "description": "Expert en audit et rénovation énergétique en Île-de-France",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/assets/img/COULEUR_JPEG.jpg`,
            "width": "300",
            "height": "100"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-1-86-22-31-85",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": "French"
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Île-de-France",
            "addressCountry": "FR"
          },
          "foundingDate": "2020",
          "knowsAbout": [
            "Audit énergétique",
            "Rénovation énergétique",
            "Ma Prime Rénov",
            "Diagnostic de performance énergétique",
            "Accompagnement rénov"
          ]
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          "name": "Audicée",
          "image": `${baseUrl}/assets/img/COULEUR_JPEG.jpg`,
          "telephone": "+33-1-86-22-31-85",
          "email": "contact@audicee.fr",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Île-de-France",
            "addressCountry": "FR",
            "postalCode": "75000"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.8566,
            "longitude": 2.3522
          },
          "url": baseUrl,
          "openingHours": "Mo-Fr 09:00-18:00",
          "serviceArea": [
            {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 48.8566,
                "longitude": 2.3522
              },
              "geoRadius": "50000"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services d'audit et rénovation énergétique",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Audit énergétique",
                  "description": "Audit complet de performance énergétique de votre logement"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Accompagnement Ma Prime Rénov",
                  "description": "Accompagnement complet pour vos démarches Ma Prime Rénov"
                }
              }
            ]
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${baseUrl}/#service`,
          "name": data?.name || "Services d'audit énergétique",
          "description": data?.description || "Services professionnels d'audit et de rénovation énergétique en Île-de-France",
          "provider": {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`
          },
          "areaServed": {
            "@type": "State",
            "name": "Île-de-France"
          },
          "serviceType": "Audit énergétique",
          "offers": {
            "@type": "Offer",
            "availability": "InStock",
            "validFrom": new Date().toISOString().split('T')[0]
          }
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