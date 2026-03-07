import avanzaImage from "@/assets/cars/Toyota-Avanza-removebg-preview.png";
import apvImage from "@/assets/cars/suzuki-apv-68ae-removebg-preview.png";
import stargazerImage from "@/assets/cars/startgazer.png";
import innovaImage from "@/assets/cars/innova-reborn.png";
import safariImage from "@/assets/cars/Volkswagen_Safari.png";
import xpanderImage from "@/assets/cars/Xpander.png";
import hiaceImage from "@/assets/cars/hiace.png";
import alphardImage from "@/assets/cars/Toyota-Alphard.png";

// ---------------------------------------------------------------------------
// Cars / Fleet
// ---------------------------------------------------------------------------

export type CarPricing = {
  hours: number;
  priceIDR: number;
};

export type CarContent = {
  slug: string;
  name: string;
  image: string;
  passengers: string; // e.g. "1 – 6 person"
  hasAC: boolean;
  fullDay: CarPricing;
  halfDay: CarPricing;
  inclusions: string[];
  vehicleNote?: string;
  description: string;
};

const carList: CarContent[] = [
  {
    slug: "toyota-avanza",
    name: "Toyota Avanza",
    image: avanzaImage,
    passengers: "1 – 6 person",
    hasAC: true,
    fullDay: { hours: 10, priceIDR: 600_000 },
    halfDay: { hours: 5, priceIDR: 400_000 },
    inclusions: [
      "Private Car with good A/C",
      "English Speaking Driver",
      "Petrol",
      "Parking fee",
    ],
    description:
      "A reliable and comfortable MPV perfect for small groups exploring Bali's winding roads.",
  },
  {
    slug: "suzuki-apv",
    name: "Suzuki APV",
    image: apvImage,
    passengers: "1 – 6 person",
    hasAC: true,
    fullDay: { hours: 10, priceIDR: 750_000 },
    halfDay: { hours: 5, priceIDR: 500_000 },
    inclusions: [
      "Private Car with good A/C",
      "English Speaking Driver",
      "Petrol",
      "Parking fee",
    ],
    description:
      "Spacious interior with ample luggage room, ideal for family day trips around the island.",
  },
  {
    slug: "hyundai-stargazer",
    name: "Hyundai Stargazer",
    image: stargazerImage,
    passengers: "1 – 6 person",
    hasAC: true,
    fullDay: { hours: 10, priceIDR: 800_000 },
    halfDay: { hours: 5, priceIDR: 600_000 },
    inclusions: [
      "Private Car with good A/C",
      "English Speaking Driver",
      "Petrol",
      "Parking fee",
    ],
    description:
      "Modern design meets everyday comfort — a stylish ride for sightseeing across Bali.",
  },
  {
    slug: "innova-reborn",
    name: "Toyota Innova Reborn",
    image: innovaImage,
    passengers: "1 – 6 person",
    hasAC: true,
    fullDay: { hours: 10, priceIDR: 950_000 },
    halfDay: { hours: 5, priceIDR: 750_000 },
    inclusions: [
      "Private Car with good A/C",
      "English Speaking Driver",
      "Petrol",
      "Parking fee",
    ],
    description:
      "Premium comfort and refined styling — our most popular choice for executive transfers.",
  },
  {
    slug: "volkswagen-safari",
    name: "Volkswagen Safari",
    image: safariImage,
    passengers: "1 – 3 person",
    hasAC: false,
    fullDay: { hours: 12, priceIDR: 1_125_000 },
    halfDay: { hours: 6, priceIDR: 750_000 },
    inclusions: [
      "Private Volkswagen Safari Car (No A/C)",
      "English Speaking Driver",
      "Petrol",
      "Parking fee",
    ],
    vehicleNote: "Open-air classic — No A/C",
    description:
      "An iconic open-top classic for the ultimate Instagram-worthy Bali road trip.",
  },
  {
    slug: "mitsubishi-xpander",
    name: "Mitsubishi Xpander",
    image: xpanderImage,
    passengers: "1 – 6 person",
    hasAC: true,
    fullDay: { hours: 10, priceIDR: 800_000 },
    halfDay: { hours: 5, priceIDR: 600_000 },
    inclusions: [
      "Private Car with good A/C",
      "English Speaking Driver",
      "Petrol",
      "Parking fee",
    ],
    description:
      "Bold crossover styling with a smooth ride — great for couples and small families.",
  },
  {
    slug: "toyota-hiace",
    name: "Toyota HiAce",
    image: hiaceImage,
    passengers: "1 – 15 person",
    hasAC: true,
    fullDay: { hours: 12, priceIDR: 1_500_000 },
    halfDay: { hours: 6, priceIDR: 1_050_000 },
    inclusions: [
      "Private Toyota HiAce with good A/C",
      "English Speaking Driver",
      "Petrol",
      "Parking fee",
    ],
    description:
      "The go-to minibus for larger groups — spacious, air-conditioned, and ready for long tours.",
  },
  {
    slug: "toyota-alphard",
    name: "Toyota Alphard",
    image: alphardImage,
    passengers: "1 – 6 person",
    hasAC: true,
    fullDay: { hours: 12, priceIDR: 3_500_000 },
    halfDay: { hours: 6, priceIDR: 2_500_000 },
    inclusions: [
      "Private Toyota Alphard / Vellfire with Good A/C",
      "Driver",
      "Petrol",
      "Parking fee",
    ],
    vehicleNote: "Alphard / Vellfire",
    description:
      "First-class luxury on wheels — captain seats, whisper-quiet cabin, and VIP-level comfort.",
  },
];

export const carsBySlug: Record<string, CarContent> = carList.reduce(
  (acc, car) => {
    acc[car.slug] = car;
    return acc;
  },
  {} as Record<string, CarContent>,
);

export const getAllCars = () => carList;

export const getCarBySlug = (slug: string | undefined) =>
  slug ? carsBySlug[slug] : undefined;
