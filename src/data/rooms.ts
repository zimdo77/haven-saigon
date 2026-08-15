export type Room = {
  slug: string;
  name: string;
  roomType: string;
  description: string;
  size: number;
  guests: number;
  features: string[];
  images: string[];
  floorplans: string[];
};

export const rooms: Room[] = [
  {
    slug: "chamomile",
    name: "Chamomile",
    roomType: "Studio Apartment",
    description:
      "This is a placeholder for further descriptions. This is a placeholder for further descriptions.",
    size: 28,
    guests: 2,
    features: ["1 Queen Bed"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/chamomile/1.jpg",

      "/images/rooms/chamomile/2.jpg",
      "/images/rooms/chamomile/3.jpg",
      "/images/rooms/chamomile/4.jpg",
      "/images/rooms/chamomile/5.jpg",
    ],
    floorplans: [
      "/images/rooms/chamomile/floorplan.jpg",
      "/images/rooms/chamomile/floorplan-annotated.jpg",
    ],
  },
  {
    slug: "sencha",
    name: "Sencha",
    roomType: "1 Bedroom Apartment",
    description:
      "This is a placeholder for further descriptions. This is a placeholder for further descriptions.",
    size: 32.5,
    guests: 2,
    features: ["1 Queen Bed", "Large Windows"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/sencha/3.jpg",

      "/images/rooms/sencha/1.jpg",
      "/images/rooms/sencha/2.jpg",
      "/images/rooms/sencha/4.jpg",
      "/images/rooms/sencha/5.jpg",
    ],
    floorplans: [
      "/images/rooms/sencha/floorplan.jpg",
      "/images/rooms/sencha/floorplan-annotated.jpg",
    ],
  },
  {
    slug: "jasmine",
    name: "Jasmine",
    roomType: "1 Bedroom Apartment",
    description:
      "This is a placeholder for further descriptions. This is a placeholder for further descriptions.",
    size: 36.5,
    guests: 2,
    features: ["1 Queen Bed", "Private Loggia"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/jasmine/6.jpg",

      "/images/rooms/jasmine/1.jpg",
      "/images/rooms/jasmine/2.jpg",
      "/images/rooms/jasmine/3.jpg",
      "/images/rooms/jasmine/4.jpg",
      "/images/rooms/jasmine/5.jpg",
      "/images/rooms/jasmine/7.jpg",
      "/images/rooms/jasmine/8.jpg",
      "/images/rooms/jasmine/9.jpg",
      "/images/rooms/jasmine/10.jpg",
      "/images/rooms/jasmine/11.jpg",
    ],
    floorplans: [
      "/images/rooms/jasmine/floorplan.jpg",
      "/images/rooms/jasmine/floorplan-annotated.jpg",
    ],
  },
  {
    slug: "peppermint",
    name: "Peppermint",
    roomType: "1 Bedroom Apartment",
    description:
      "This is a placeholder for further descriptions. This is a placeholder for further descriptions.",
    size: 45,
    guests: 2,
    features: ["1 King Bed", "Large Windows", "Private Loggia", "Study Area"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/peppermint/5.jpg",

      "/images/rooms/peppermint/1.jpg",
      "/images/rooms/peppermint/2.jpg",
      "/images/rooms/peppermint/3.jpg",
      "/images/rooms/peppermint/4.jpg",
      "/images/rooms/peppermint/6.jpg",
      "/images/rooms/peppermint/7.jpg",
      "/images/rooms/peppermint/8.jpg",
      "/images/rooms/peppermint/9.jpg",
      "/images/rooms/peppermint/10.jpg",
      "/images/rooms/peppermint/11.jpg",
      "/images/rooms/peppermint/12.jpg",
    ],
    floorplans: [
      "/images/rooms/peppermint/floorplan.jpg",
      "/images/rooms/peppermint/floorplan-annotated.jpg",
    ],
  },
  {
    slug: "lemongrass",
    name: "Lemongrass",
    roomType: "1 Bedroom Apartment",
    description:
      "This is a placeholder for further descriptions. This is a placeholder for further descriptions.",
    size: 38.5,
    guests: 2,
    features: ["1 King Bed", "Large Windows", "Private Loggia", "Study Area"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/lemongrass/1.jpg",

      "/images/rooms/lemongrass/2.jpg",
      "/images/rooms/lemongrass/3.jpg",
      "/images/rooms/lemongrass/4.jpg",
      "/images/rooms/lemongrass/5.jpg",
      "/images/rooms/lemongrass/6.jpg",
      "/images/rooms/lemongrass/7.jpg",
    ],
    floorplans: [
      "/images/rooms/lemongrass/floorplan.jpg",
      "/images/rooms/lemongrass/floorplan-annotated.jpg",
      "/images/rooms/chalemongrassmomile/floorplan-3d.jpg",
    ],
  },
  {
    slug: "lemongrass-green",
    name: "Lemongrass Green",
    roomType: "1 Bedroom Apartment (with Balcony)",
    description:
      "This is a placeholder for further descriptions. This is a placeholder for further descriptions.",
    size: 45.5,
    guests: 2,
    features: [
      "1 King Bed",
      "Large Windows",
      "Private Loggia",
      "Study Area",
      "Balcony",
    ],
    images: [
      // FEATURE PHOTO
      "/images/rooms/lemongrass-green/1.jpg",

      "/images/rooms/lemongrass-green/2.jpg",
      "/images/rooms/lemongrass-green/3.jpg",
      "/images/rooms/lemongrass-green/4.jpg",
      "/images/rooms/lemongrass-green/5.jpg",
      "/images/rooms/lemongrass-green/6.jpg",
      "/images/rooms/lemongrass-green/7.jpg",
    ],
    floorplans: [
      "/images/rooms/lemongrass-green/floorplan.jpg",
      "/images/rooms/lemongrass-green/floorplan-annotated.jpg",
    ],
  },
  {
    slug: "oolong",
    name: "Oolong",
    roomType: "2 Bedroom Apartment",
    description:
      "This is a placeholder for further descriptions. This is a placeholder for further descriptions.",
    size: 53,
    guests: 3,
    features: [
      "1 Queen Bed + 1 Double Bed",
      "Large Windows",
      "Private Loggia",
      "Study Area",
    ],
    images: [
      // FEATURE PHOTO
      "/images/rooms/oolong/8.jpg",

      "/images/rooms/oolong/1.jpg",
      "/images/rooms/oolong/2.jpg",
      "/images/rooms/oolong/3.jpg",
      "/images/rooms/oolong/4.jpg",
      "/images/rooms/oolong/5.jpg",
      "/images/rooms/oolong/6.jpg",
      "/images/rooms/oolong/7.jpg",
      "/images/rooms/oolong/9.jpg",
      "/images/rooms/oolong/10.jpg",
      "/images/rooms/oolong/11.jpg",
      "/images/rooms/oolong/12.jpg",
    ],
    floorplans: [
      "/images/rooms/oolong/floorplan.jpg",
      "/images/rooms/oolong/floorplan-annotated.jpg",
      "/images/rooms/oolong/floorplan-3d.jpg",
    ],
  },
  {
    slug: "rose-oolong",
    name: "Rose Oolong",
    roomType: "2 Bedroom Apartment (with Balcony)",
    description:
      "This is a placeholder for further descriptions. This is a placeholder for further descriptions.",
    size: 58.3,
    guests: 3,
    features: [
      "1 Queen Bed + 1 Double Bed",
      "Large Windows",
      "Private Loggia",
      "Study Area",
      "Balcony",
    ],
    images: [
      // FEATURE PHOTO
      "/images/rooms/rose-oolong/4.jpg",

      "/images/rooms/rose-oolong/1.jpg",
      "/images/rooms/rose-oolong/2.jpg",
      "/images/rooms/rose-oolong/3.jpg",
      "/images/rooms/rose-oolong/5.jpg",
      "/images/rooms/rose-oolong/6.jpg",
      "/images/rooms/rose-oolong/7.jpg",
      "/images/rooms/rose-oolong/8.jpg",
      "/images/rooms/rose-oolong/9.jpg",
      "/images/rooms/rose-oolong/10.jpg",
      "/images/rooms/rose-oolong/11.jpg",
      "/images/rooms/rose-oolong/12.jpg",
      "/images/rooms/rose-oolong/13.jpg",
    ],
    floorplans: ["/images/rooms/chamomile/floorplan.jpg"],
  },
];
