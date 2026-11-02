export type Room = {
  slug: string;
  name: string;
  roomType: string;
  description: string;
  relatedRoom?: {
    name: string;
    slug: string;
  };
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
      "A compact studio with a private kitchen, designed for simple and comfortable everyday living.",
    size: 28,
    guests: 2,
    features: ["1 Queen Bed"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/chamomile/4.png",

      "/images/rooms/chamomile/1.png",
      "/images/rooms/chamomile/2.png",
      "/images/rooms/chamomile/3.png",
      "/images/rooms/chamomile/5.png",
    ],
    floorplans: ["/images/rooms/chamomile/fp.jpg"],
  },
  {
    slug: "sencha",
    name: "Sencha",
    roomType: "1 Bedroom Apartment",
    description:
      "Our most compact one-bedroom apartment, with separate living, kitchen and dining areas.",
    size: 32.5,
    guests: 2,
    features: ["1 Queen Bed", "Large Windows"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/sencha/2.png",

      "/images/rooms/sencha/1.png",
      "/images/rooms/sencha/4.png",
      "/images/rooms/sencha/3.png",
    ],
    floorplans: ["/images/rooms/sencha/fp.jpg"],
  },
  {
    slug: "jasmine",
    name: "Jasmine",
    roomType: "1 Bedroom Apartment",
    description:
      "A comfortable one-bedroom apartment with a kitchen and dining space, plus a private loggia.",
    size: 36.5,
    guests: 2,
    features: ["1 Queen Bed", "Private Loggia"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/jasmine/1.png",

      "/images/rooms/jasmine/2.png",
      "/images/rooms/jasmine/3.png",
      "/images/rooms/jasmine/4.png",
      "/images/rooms/jasmine/5.png",
    ],
    floorplans: ["/images/rooms/jasmine/fp.jpg"],
  },
  {
    slug: "peppermint",
    name: "Peppermint",
    roomType: "1 Bedroom Apartment",
    description:
      "A spacious one-bedroom apartment with a private loggia, kitchen and dining area, and a study space in the bedroom.",
    size: 45,
    guests: 2,
    features: ["1 King Bed", "Large Windows", "Private Loggia", "Study Area"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/peppermint/1.png",

      "/images/rooms/peppermint/2.png",
      "/images/rooms/peppermint/3.png",
      "/images/rooms/peppermint/4.png",
      "/images/rooms/peppermint/5.png",
    ],
    floorplans: ["/images/rooms/peppermint/fp.jpg"],
  },
  {
    slug: "lemongrass",
    name: "Lemongrass",
    roomType: "1 Bedroom Apartment",
    description:
      "A spacious one-bedroom apartment with a private loggia, kitchen and dining area, and a a study space in the bedroom.",
    size: 38.5,
    guests: 2,
    features: ["1 King Bed", "Large Windows", "Private Loggia", "Study Area"],
    images: [
      // FEATURE PHOTO
      "/images/rooms/lemongrass/1.png",

      "/images/rooms/lemongrass/2.png",
      "/images/rooms/lemongrass/3.png",
      "/images/rooms/lemongrass/4.png",
      "/images/rooms/lemongrass/5.png",
    ],
    floorplans: ["/images/rooms/lemongrass/fp.jpg"],
  },
  {
    slug: "lemongrass-green",
    name: "Lemongrass Green",
    roomType: "1 Bedroom Apartment (with Balcony)",
    description:
      "A spacious one-bedroom apartment with the same layout as Lemongrass, plus a private balcony.",
    relatedRoom: {
      name: "Lemongrass",
      slug: "lemongrass",
    },
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
      "/images/rooms/lemongrass-green/1.png",

      "/images/rooms/lemongrass-green/2.png",
      "/images/rooms/lemongrass-green/3.png",
      "/images/rooms/lemongrass-green/4.png",
      "/images/rooms/lemongrass-green/5.png",
    ],
    floorplans: ["/images/rooms/lemongrass-green/fp.jpg"],
  },
  {
    slug: "oolong",
    name: "Oolong",
    roomType: "2 Bedroom Apartment",
    description:
      "A spacious two-bedroom apartment with a kitchen and dining space, a private loggia, and study space in the bedroom.",
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
      "/images/rooms/oolong/1.png",

      "/images/rooms/oolong/2.png",
      "/images/rooms/oolong/3.png",
      "/images/rooms/oolong/4.png",
      "/images/rooms/oolong/5.png",
    ],
    floorplans: ["/images/rooms/oolong/fp.jpg"],
  },
  {
    slug: "rose-oolong",
    name: "Rose Oolong",
    roomType: "2 Bedroom Apartment (with Balcony)",
    description:
      "A spacious two-bedroom apartment with the same layout as Oolong, plus a private balcony.",
    relatedRoom: {
      name: "Oolong",
      slug: "oolong",
    },
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
      "/images/rooms/rose-oolong/1.png",

      "/images/rooms/rose-oolong/2.png",
      "/images/rooms/rose-oolong/3.png",
      "/images/rooms/rose-oolong/4.png",
      "/images/rooms/rose-oolong/5.png",
    ],
    floorplans: ["/images/rooms/rose-oolong/fp.jpg"],
  },
];
