export default function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://havensaigon.com.vn/#business",

    name: "Haven Saigon",
    url: "https://havensaigon.com.vn",

    description:
      "Fully furnished serviced apartments in Thao Dien, Ho Chi Minh City, offering studios, one-bedroom and two-bedroom apartments with modern facilities and flexible stays.",

    image: "https://havensaigon.com.vn/images/home/hero.jpg",

    telephone: "+84329220226",
    email: "sales@havensaigon.com.vn",

    address: {
      "@type": "PostalAddress",
      streetAddress: "13 Tống Hữu Định Street",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "An Khánh Ward",
      addressCountry: "VN",
    },

    hasMap: "https://maps.app.goo.gl/fNv3KNnHZsnCobZM9",

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Fitness Area",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Co-working Space",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Rooftop Terrace and BBQ Area",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Security",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Housekeeping",
        value: true,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
