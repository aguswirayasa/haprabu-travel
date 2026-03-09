import ubudImage from "@/assets/ubud.jpg";
import seminyakImage from "@/assets/seminyak.jpg";
import nusaPenidaImage from "@/assets/nusa-penida.jpg";
import heroBalImage from "@/assets/hero-bali.jpg";
import atuhBeachImage from "@/assets/destinations/atuh-beach.webp";
import diamondBeachImage from "@/assets/destinations/diamond-beach.webp";
import thousandViewpointImage from "@/assets/destinations/thousand-viewpoint.webp";
import teletubbiesHillsImage from "@/assets/destinations/teletubbies_hill-penida-bali-sou.webp";
import kelingkingBeachImage from "@/assets/destinations/kelingking-beach.webp";
import paluangCliffImage from "@/assets/destinations/palung-cliff.webp";
import brokenBeachImage from "@/assets/destinations/broken-beach.webp";
import angelBillabongImage from "@/assets/destinations/angel-billabong.webp";
import crystalBayImage from "@/assets/destinations/crystal-bay-beach-nusa-penida-ba.webp";
import besakihImage from "@/assets/destinations/besakih.webp";
import lempuyangImage from "@/assets/destinations/lempuyang.webp";
import tirtaGanggaImage from "@/assets/destinations/Tirta-Gangga-Water-Palace.webp";
import tamanUjungImage from "@/assets/destinations/taman-ujung.webp";
import pickupImage from "@/assets/destinations/pickup.webp";
import artVillageImage from "@/assets/destinations/art-village.jpeg";
import atvAdventureImage from "@/assets/destinations/atv-advanture.webp";
import barongKrisImage from "@/assets/destinations/barong-kris.jpeg";
import batuanTempleImage from "@/assets/destinations/batuan-temple.jpeg";
import blackLavaImage from "@/assets/destinations/black-lava.webp";
import celukVillageImage from "@/assets/destinations/celuk-village.jpeg";
import coffeePlantationImage from "@/assets/destinations/coffe-plantation.jpeg";
import jeepBaturImage from "@/assets/destinations/jeep-batur.webp";
import luwakCoffeImage from "@/assets/destinations/luwak-coffe.jpeg";
import monkeyForestImage from "@/assets/destinations/monkey-forest.webp";
import raftingImage from "@/assets/destinations/rafting.webp";
import tamanAyunImage from "@/assets/destinations/taman-ayun.webp";
import tanahLotImage from "@/assets/destinations/tanah-lot.webp";
import tegenunganWaterfallImage from "@/assets/destinations/tegenungan-waterfall.jpeg";
import ulunDanuImage from "@/assets/destinations/ulun-danu.webp";
import ubudSwingImage from "@/assets/destinations/ubung-swing.jpeg";
import gwkImage from "@/assets/destinations/gwk.webp";
import melastiBeachImage from "@/assets/destinations/Melasti-Beach-3.webp";
import pandawaBeachImage from "@/assets/destinations/pandawa-beach.webp";
import uluwatuTempleImage from "@/assets/destinations/uluwatu-temple.webp";
import jimbaranSeafoodImage from "@/assets/destinations/jimbaran-seafood.webp";

// --- NEW PACKAGE DATA ---

export type PackageContent = {
  slug: string;
  name: string;
  image: string;
  priceStartFromIDR: number;
  destinationCount?: number;
  description: string;
  overview: string;

  destinations?: {
    title: string;
    image: string;
    description: string;
  }[];
  ctaLabel?: string;
  ctaHref?: string;
  tripInfo?: {
    startTime: string;
    priceLocalIDR: number;
    currencyLabel?: string;
    minimumPax: number;
    specialPriceNote?: string;
  };
  itinerary?: {
    time: string;
    activity: string;
  }[];
  inclusions?: string[];
  exclusions?: string[];
  optionals?: {
    label: string;
    price: string;
  }[];
  pickupDropoff?: {
    description: string;
    areas: string[];
  };
  importantNote?: string;

  /* ── Transfer / service-style package fields ── */
  tagline?: string;
  serviceHighlights?: {
    title: string;
    description: string;
  }[];
  benefits?: {
    title: string;
    description: string;
  }[];
  pricingTables?: {
    label: string;
    routes: {
      from: string;
      to: string;
      priceIDR: number;
    }[];
  }[];
  fleetInfo?: {
    title: string;
    description: string;
  }[];
};

const packageList: PackageContent[] = [
  /* ══════════════════════════════════════════════
     Transfer / Pickup & Drop-off Services package
     ══════════════════════════════════════════════ */
  {
    slug: "pickup-dropoff-services",
    name: "Convenient Pickup & Drop-off Services",
    image: pickupImage,
    priceStartFromIDR: 125_000,
    description:
      "All-in-one transfer service — airport pickups, hotel transfers, city tours, and custom rides across Bali.",
    overview:
      "Whether you're landing at Ngurah Rai Airport, switching hotels, or heading to Bali's top attractions, our transfer service keeps your journey smooth and stress-free. Choose from airport pickups with a personal welcome sign, comfortable inter-hotel transfers, daily tour packages, or fully customizable car-and-driver hire for any occasion.",
    tagline: "ALL-IN-ONE Transfer, Anytime, Anywhere",

    serviceHighlights: [
      {
        title: "Airport Pickup & Drop-off",
        description:
          "On-time airport pick-up, with a friendly welcome and welcome sign in the arrival hall.",
      },
      {
        title: "Hotel Pickup & Drop-off",
        description:
          "Get picked up directly at the hotel lobby, no waiting — your vacation starts right when you get off the elevator.",
      },
      {
        title: "Inter-Hotel Transfer",
        description:
          "Need to move hotels or villas? We deliver comfortably, even over long distances.",
      },
      {
        title: "City & Island Tours",
        description:
          "Daily tour packages to popular tourist attractions (Ubud, Tanah Lot, Nusa Penida) complete with an experienced guide.",
      },
      {
        title: "Custom Transfer Services",
        description:
          "Car rental + driver for special events: meetings, weddings, corporate outings — flexible according to your needs.",
      },
    ],

    benefits: [
      {
        title: "Punctual & Reliable",
        description: "On-time guaranteed, every trip.",
      },
      {
        title: "Professional Drivers",
        description: "Licensed, experienced, and friendly.",
      },
      {
        title: "Clean & Comfortable Cars",
        description: "Up-to-date fleet, regularly sanitized.",
      },
      {
        title: "24/7 Customer Support",
        description: "Live chat & phone ready to serve anytime.",
      },
    ],

    pricingTables: [
      {
        label: "Airport → Hotel",
        routes: [
          {
            from: "Bandara DPS",
            to: "Kuta / Jimbaran",
            priceIDR: 125_000,
          },
          {
            from: "Bandara DPS",
            to: "Legian / Seminyak",
            priceIDR: 150_000,
          },
          {
            from: "Bandara DPS",
            to: "Canggu",
            priceIDR: 250_000,
          },
          {
            from: "Bandara DPS",
            to: "Kerobokan",
            priceIDR: 200_000,
          },
          {
            from: "Bandara DPS",
            to: "Ubud (Pusat)",
            priceIDR: 350_000,
          },
          {
            from: "Bandara DPS",
            to: "Ubud (Tegalalang)",
            priceIDR: 400_000,
          },
          {
            from: "Bandara DPS",
            to: "Ubud (Lotundoh)",
            priceIDR: 250_000,
          },
          {
            from: "Bandara DPS",
            to: "Sukawati",
            priceIDR: 250_000,
          },
          {
            from: "Bandara DPS",
            to: "Gianyar",
            priceIDR: 400_000,
          },
          {
            from: "Ngurah Rai Airport",
            to: "Tanah Lot / Tabanan",
            priceIDR: 300_000,
          },
          {
            from: "Ngurah Rai Airport",
            to: "Nusa Dua",
            priceIDR: 200_000,
          },
          {
            from: "Ngurah Rai Airport",
            to: "Sanur",
            priceIDR: 225_000,
          },
          {
            from: "Ngurah Rai Airport",
            to: "Ungasan / Pecatu / Uluwatu",
            priceIDR: 250_000,
          },
        ],
      },
      {
        label: "Hotel → Hotel",
        routes: [
          {
            from: "Kuta",
            to: "Seminyak / Legian / Jimbaran / Kerobokan",
            priceIDR: 125_000,
          },
          {
            from: "Kuta / Jimbaran",
            to: "Canggu",
            priceIDR: 250_000,
          },
          {
            from: "Seminyak",
            to: "Canggu",
            priceIDR: 225_000,
          },
          {
            from: "Jimbaran / Kuta / Legian / Seminyak",
            to: "Ubud",
            priceIDR: 350_000,
          },
        ],
      },
    ],

    fleetInfo: [
      {
        title: "Modern & Comfortable Vehicles",
        description:
          "Enjoy spotless, air-conditioned small cars (Avanza, Xenia) with ample room for up to 4 passengers plus luggage — ideal for solo explorers or families on the move.",
      },
      {
        title: "Hassle-Free Experience",
        description:
          "Everything's covered in your package: licensed professional drivers, fuel, parking fees & tolls, and complimentary bottled water.",
      },
      {
        title: "Flexible Payment Options",
        description:
          "Pay your way — Bank Transfer, PayPal, or Cash on Arrival.",
      },
      {
        title: "Free Cancellation",
        description:
          "Change of plans? Cancel free up to 24 hours before your pickup — no penalties, no headaches.",
      },
      {
        title: "Group Travel & Larger Fleet",
        description:
          "Traveling with more than 4 guests? Contact us for special rates on Hiace vans, Innova SUVs, or full-size coaches — so your entire group rides in comfort and style.",
      },
    ],

    inclusions: [
      "Licensed, professional drivers",
      "Fuel, parking fees & tolls",
      "Complimentary bottled water",
      "Free cancellation up to 24 hours before pickup",
    ],
  },

  /* ══════════════════════════════════════════════
     Tour packages
     ══════════════════════════════════════════════ */
  {
    slug: "east-nusa-penida-tour",
    name: "East Nusa Penida Tour",
    image: atuhBeachImage,
    priceStartFromIDR: 1_350_000,
    destinationCount: 4,
    description:
      "Visit Nusa Penida's east side beaches and viewpoints in one day.",
    overview:
      "Take a day trip to Nusa Penida and explore some of the island's most well known east side spots. You will visit Atuh Beach and Diamond Beach, stop at Thousand Island View Point for ocean views, and finish with a break at Teletubbies Hills.",

    destinations: [
      {
        title: "Atuh Beach",
        image: atuhBeachImage,
        description:
          "Discover the peaceful coastal beauty of Atuh Beach on your East Nusa Penida tour. Tucked away behind tall green cliffs and a giant limestone arch, this secluded bay offers the perfect spot to relax. The calm clear waters invite you to swim and explore colorful coral reefs. Walk down the stone steps to enjoy soft white sand and stunning sunrise views by the open ocean.",
      },
      {
        title: "Diamond Beach",
        image: diamondBeachImage,
        description:
          "Diamond Beach is a top destination on any East Nusa Penida trip. Famous for its brilliant blue water and tall limestone cliffs, this beach gets its name from the stunning diamond shaped rocks rising from the sea. You can capture amazing photos from the top viewpoint or walk down the iconic stone stairs to the untouched white sand below. It offers a wonderful blend of pure natural beauty and exciting adventure for every traveler.",
      },
      {
        title: "Thousand Island View Point",
        image: thousandViewpointImage,
        description:
          "Experience a spectacular ocean panorama at Thousand Island View Point, locally known as Pulau Seribu. This amazing clifftop spot lets you look out over the vast Indian Ocean and see dozens of rocky islands rising from the clear turquoise waves. Safe viewing areas allow you to feel the ocean breeze and take in the massive scale of the eastern coast. It is the ultimate location to snap incredible landscape photos and admire the wild side of Nusa Penida.",
      },
      {
        title: "Teletubbies Hills",
        image: teletubbiesHillsImage,
        description:
          "Take a short break from the ocean cliffs and discover the gentle charm of Teletubbies Hills. Located in the lush center of Nusa Penida, this wide open area features smooth rolling mounds that look just like a magical fairy tale landscape. The hills are covered in bright green grass during wetter months and turn a lovely golden color in the dry season. Enjoy the cooler air and quiet atmosphere as you walk through this unique and relaxing island destination.",
      },
    ],
    tripInfo: {
      startTime: "06.30 AM – 07.00 AM",
      priceLocalIDR: 1_350_000,
      currencyLabel: "per person",
      minimumPax: 2,
      specialPriceNote: "Get special price for 4–6 person",
    },
    importantNote:
      "Please take a note that you need to be ready at the earliest time range for hotel pickup. Apart from departure time, the timetable below is an estimation only and may vary in the actual trip.",
    itinerary: [
      { time: "6:30 AM", activity: "Pickup from hotel" },
      { time: "7:30 AM", activity: "Arrive at Sanur Harbour Point" },
      { time: "8:00 AM", activity: "Depart Sanur to Nusa Penida" },
      { time: "9:15 AM", activity: "Arrive at Nusa Penida Harbour" },
      { time: "10:30 AM", activity: "Visit Atuh Beach & Diamond Beach" },
      { time: "12:00 PM", activity: "Thousand Islands" },
      { time: "1:00 PM", activity: "Lunch" },
      { time: "2:30 PM", activity: "Visit Teletubbies Hills" },
      { time: "4:10 PM", activity: "Arrive at Nusa Penida Harbour" },
      { time: "4:30 PM", activity: "Depart Nusa Penida to Sanur" },
      { time: "5:20 PM", activity: "Arrive at Sanur and go back to hotel" },
    ],
    inclusions: [
      "Fuel",
      "Air-conditioned & clean interior",
      "English-speaking driver as a guide",
      "Tour consultancy",
      "Free bottled water",
      "All entrance tickets at Nusa Penida island",
      "Lunch at Nusa Penida island",
      "Round trip fast boat ticket",
    ],
    exclusions: [
      "Your personal expenses",
      "Transportation pickup from hotel to port and from port to hotel",
    ],
    pickupDropoff: {
      description: "Please contact us if you are staying in a remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Sanur",
        "Ubud",
      ],
    },
  },
  {
    slug: "west-nusa-penida-tour",
    name: "West Nusa Penida Tour",
    image: kelingkingBeachImage,
    priceStartFromIDR: 1_100_000,
    destinationCount: 5,
    description:
      "Explore Nusa Penida's iconic west side cliffs, beaches, and natural pools in one day.",
    overview:
      "Take a full day trip to the west side of Nusa Penida and experience its most iconic landmarks. You will visit the famous Kelingking Beach, stop at the hidden Paluang Cliff viewpoint, walk around the breathtaking Broken Beach, relax at Angel's Billabong natural pool, and end the day unwinding at the beautiful Crystal Bay.",

    destinations: [
      {
        title: "Kelingking Beach",
        image: kelingkingBeachImage,
        description:
          "Visit Kelingking Beach to see the famous T Rex cliff of Nusa Penida. This stunning limestone rock formation drops 200 meters into the bright blue Indian Ocean. You can take amazing photos from the top viewpoint or challenge yourself with a steep walk down to the beautiful white sand beach below. It is a must see destination that offers some of the best ocean views in Bali.",
      },
      {
        title: "Paluang Cliff",
        image: paluangCliffImage,
        description:
          "Escape the heavy crowds at Paluang Cliff. Located just a short distance from Kelingking, this hidden viewpoint gives you a unique and quiet angle of the famous T Rex cliff. While here, you can also explore the fascinating local Car Temple or take fun pictures on the wooden boat photo platform. It is a peaceful stop that adds culture and beautiful scenery to your island trip.",
      },
      {
        title: "Broken Beach",
        image: brokenBeachImage,
        description:
          "Discover the unique natural architecture of Broken Beach. Known locally as Pasih Uug, this spectacular circular bay features a massive stone archway created by ocean waves over many years. You can walk all the way around the top edge of the cliff to enjoy panoramic views and watch the crystal clear water flow perfectly into the cove.",
      },
      {
        title: "Angel's Billabong",
        image: angelBillabongImage,
        description:
          "Just a quick walk from Broken Beach is the beautiful Angel's Billabong. This natural infinity pool is beautifully carved into sharp volcanic rocks. During low tide, the emerald green water becomes incredibly clear and calm. It is a fantastic and safe place to admire the unique rock formations and watch the ocean swell meet the rugged island coast.",
      },
      {
        title: "Crystal Bay",
        image: crystalBayImage,
        description:
          "Relax and unwind at the beautiful Crystal Bay. Surrounded by perfectly lined palm trees, this soft sand beach is the ultimate spot for swimming and snorkeling in West Nusa Penida. The calm water offers amazing visibility where you can easily spot colorful coral reefs and sea turtles. Finish your adventurous tour day here by relaxing on the beach and watching a gorgeous tropical sunset.",
      },
    ],
    tripInfo: {
      startTime: "06.30 AM – 07.00 AM",
      priceLocalIDR: 1_100_000,
      currencyLabel: "per person",
      minimumPax: 2,
      specialPriceNote: "Get special price for 4–6 person",
    },
    importantNote:
      "Please take a note that you need to be ready at the earliest time range for hotel pickup. Apart from departure time, the timetable below is an estimation only and may vary in the actual trip.",
    itinerary: [
      { time: "6:30 AM", activity: "Pickup from hotel" },
      { time: "7:30 AM", activity: "Arrive at Sanur Harbour Point" },
      { time: "8:00 AM", activity: "Depart Sanur to Nusa Penida" },
      { time: "9:15 AM", activity: "Arrive at Nusa Penida Harbour" },
      { time: "10:30 AM", activity: "Visit Paluang Cliff & Kelingking Point" },
      { time: "12:00 PM", activity: "Lunch" },
      { time: "1:00 PM", activity: "Visit Broken Beach & Angel's Billabong" },
      { time: "2:30 PM", activity: "Visit Crystal Bay" },
      { time: "4:10 PM", activity: "Arrive at Nusa Penida Harbour" },
      { time: "4:30 PM", activity: "Depart Nusa Penida to Sanur" },
      { time: "5:20 PM", activity: "Arrive at Sanur and go back to hotel" },
    ],
    inclusions: [
      "Fuel",
      "Air-conditioned & clean interior",
      "English-speaking driver as a guide",
      "Tour consultancy",
      "Free bottled water",
      "All entrance tickets at Nusa Penida island",
      "Lunch at Nusa Penida island",
      "Round trip fast boat ticket",
    ],
    exclusions: [
      "Your personal expenses",
      "Transportation pickup from hotel to port and from port to hotel",
    ],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Sanur",
        "Ubud",
      ],
    },
  },
  {
    slug: "besakih-lempuyang-tirta-gangga-east-tour",
    name: "Besakih Temple, Lempuyang & Tirta Gangga East Bali Tour",
    image: besakihImage,
    priceStartFromIDR: 850_000,
    destinationCount: 4,
    description:
      "Explore the spiritual and royal heritage of East Bali in one full day.",
    overview:
      "Join this East Bali day tour and visit four of the island's most culturally rich and scenic destinations. You will start at the iconic Gate of Heaven at Pura Lempuyang, admire the royal gardens of Tirta Gangga, explore the historical Taman Ujung water palace, and finish with a visit to the grand Mother Temple of Bali at Pura Besakih.",

    destinations: [
      {
        title: "Pura Besakih Mother Temple",
        image: besakihImage,
        description:
          "Complete your journey at Pura Besakih, deeply respected by locals as the Mother Temple of Bali. Resting high on the slopes of Mount Agung, this massive complex of twenty three distinct temples is the largest and holiest religious site on the island. Learn about its amazing history of survival, including how it was miraculously spared by the 1963 volcanic eruption. As you explore the towering shrines reaching toward the sky, your guide will share the rich stories and deep spiritual meaning that make Besakih the true cultural heart of Bali.",
      },
      {
        title: "Pura Lempuyang Gate of Heaven",
        image: lempuyangImage,
        description:
          "Start your morning at Pura Lempuyang, an ancient sanctuary famously known as the Gate of Heaven. Located on a peaceful mountain slope, this sacred temple offers one of the most iconic photo spots in Bali. Stand between the towering stone gates and capture a beautiful reflection with Mount Agung framed perfectly in the background. As one of the oldest and most important spiritual sites on the island, Pura Lempuyang gives you a quiet moment to connect with local culture while enjoying breathtaking early morning views.",
      },
      {
        title: "Tirta Gangga Royal Water Palace",
        image: tirtaGanggaImage,
        description:
          "Step into the beautiful gardens of Tirta Gangga, a royal water palace built by the King of Karangasem. Famous for its clear spring water and lush green surroundings, this destination allows you to walk across flat stone steps placed right over large ponds filled with colorful golden koi fish. You can feed the fish, admire the tall stone fountains, and even take a refreshing dip in the public pools filled with cool and holy spring water. It is a perfect spot to relax and experience royal Balinese history.",
      },
      {
        title: "Taman Ujung Historical Palace",
        image: tamanUjungImage,
        description:
          "Discover the quiet beauty of Taman Ujung, a grand water palace that beautifully blends Balinese, Dutch, and Chinese design. Once a private retreat used by royalty to host important guests, this massive park features elegant stone bridges, large peaceful pools, and historical ruins. Walk up to the highest viewpoint to enjoy a stunning visual contrast, with the vast Indian Ocean on one side and Mount Agung on the other. It is a romantic destination that escapes the busy crowds, making it ideal for relaxing walks and scenic photography.",
      },
    ],
    tripInfo: {
      startTime: "08.00 AM – 08.30 AM",
      priceLocalIDR: 850_000,
      currencyLabel: "per day",
      minimumPax: 1,
      specialPriceNote: "Maximum 5 people per group",
    },
    inclusions: [
      "Fuel",
      "Air-conditioned & clean interior",
      "English-speaking driver",
      "Tour consultancy",
      "Free bottled water",
    ],
    exclusions: [
      "Tickets or entrance fees",
      "Toll roads (if any)",
      "Your personal expenses",
    ],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Sanur",
        "Ubud",
      ],
    },
  },
  {
    slug: "north-bali-tanah-lot-taman-ayun-ulun-danu-bedugul-tour",
    name: "North Bali Tanah Lot Temple, Taman Ayun & Ulun Danu Beratan Bedugul Tour",
    image: tanahLotImage,
    priceStartFromIDR: 850_000,
    destinationCount: 4,
    description:
      "Discover the temples, highlands, and coastal beauty of North and West Bali in one full day.",
    overview:
      "Join this full day tour and experience four of Bali's most iconic cultural and natural destinations. You will start with a visit to the royal water temple of Pura Taman Ayun, stop at a local coffee plantation in the highlands, admire the floating temple of Pura Ulun Danu Beratan on Lake Beratan in Bedugul, and finish with a sunset visit to the legendary Tanah Lot Temple on the coast.",

    destinations: [
      {
        title: "Pura Taman Ayun",
        image: tamanAyunImage,
        description:
          "Discover the peaceful beauty of Pura Taman Ayun in Mengwi. Built in 1634, this royal water temple features wide fish ponds and tall thatched shrines that seem to float on water. As a recognized UNESCO World Heritage site, it highlights traditional Balinese architecture and the local agricultural culture. Stroll through the quiet green gardens, admire the ancient stone gates and experience a deeply significant piece of Bali history.",
      },
      {
        title: "Bali Coffee Plantation",
        image: coffeePlantationImage,
        description:
          "Experience local farming culture at a traditional Bali coffee plantation. Located in the fertile highlands, this site allows you to see how famous Balinese coffee and local spices are grown. You can walk through botanical gardens filled with vanilla and cacao plants before learning about the unique process behind Luwak coffee. Enjoy a relaxing tasting session of fresh local teas and coffees while taking in the natural green surroundings.",
      },
      {
        title: "Pura Ulun Danu Beratan",
        image: ulunDanuImage,
        description:
          "Pura Ulun Danu Beratan is a famous water temple located on the calm shores of Lake Beratan. Set high in the cool Bedugul mountains, the temple is dedicated to the Balinese goddess of water. When the lake water rises, the tall shrines appear to float gracefully on the surface. It is a wonderful spot to enjoy fresh mountain air, beautiful flower gardens and unique local culture away from the busy city.",
      },
      {
        title: "Tanah Lot Temple",
        image: tanahLotImage,
        description:
          "Tanah Lot is a historic sea temple resting on a large stone formation right in the ocean. Located on the western coast of Bali, it is highly popular for its beautiful sunset views. At high tide, the walking path is covered by water, creating a stunning visual effect amid the ocean waves. Visitors can explore the nearby cultural market, visit the holy freshwater springs and enjoy a relaxing evening by the sea.",
      },
    ],
    tripInfo: {
      startTime: "08.30 AM – 09.00 AM",
      priceLocalIDR: 850_000,
      currencyLabel: "per day",
      minimumPax: 1,
      specialPriceNote: "Maximum 5 people per group",
    },
    inclusions: [
      "Fuel",
      "Air-conditioned & clean interior",
      "English-speaking driver",
      "Tour consultancy",
    ],
    exclusions: [
      "Tickets or entrance fees",
      "Toll roads (if any)",
      "Your personal expenses",
    ],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Sanur",
        "Ubud",
      ],
    },
  },
  {
    slug: "bali-ubud-beauty-traditional-tour",
    name: "Bali Ubud Beauty & Traditional Tour",
    image: barongKrisImage,
    priceStartFromIDR: 700_000,
    destinationCount: 5,
    description:
      "Explore the cultural heart of Bali with traditional performances, art villages, and nature in one day.",
    overview:
      "Spend a full day discovering the rich culture and natural beauty of Ubud and its surroundings. You will watch the famous Barong and Kris Dance performance, browse unique works at the local Art Village, taste the world-renowned Luwak Coffee, visit the ancient Batuan Temple, and refresh at the beautiful Tegenungan Waterfall.",

    destinations: [
      {
        title: "Barong and Kris Dance",
        image: barongKrisImage,
        description:
          "The Barong and Kris Dance is a famous cultural performance in Bali that shows the classic battle between good and evil. Visitors can watch the good spirit Barong fight the demon queen Rangda through energetic dance steps and beautiful costumes. Set to traditional music, this show offers more than just entertainment because it shares deep spiritual lessons about local beliefs. It is a great way for travelers to experience authentic Balinese traditions in a classic cultural venue.",
      },
      {
        title: "Art Village",
        image: artVillageImage,
        description:
          "The Art Village in Ubud is a creative center where visitors can explore authentic Balinese art and culture. This area features many local galleries and workshops filled with beautiful paintings, wood carvings, and silver jewelry. You can watch skilled artisans at work, learn about their creative process, and even join hands on training sessions. It is the perfect place to buy unique handicrafts directly from the makers while enjoying a peaceful environment that highlights the rich artistic heritage of Bali.",
      },
      {
        title: "Luwak Coffee",
        image: luwakCoffeImage,
        description:
          "Bali Luwak Coffee offers a highly unique tasting experience for visitors exploring local agriculture. This specialty drink is famous for its unusual production method where coffee cherries are naturally digested by a wild civet cat before being carefully cleaned and roasted. This natural process removes the bitterness and creates a very smooth and rich flavor profile. Coffee lovers can visit local plantations to taste this rare brew fresh from the source while learning about traditional Indonesian coffee making.",
      },
      {
        title: "Batuan Temple",
        image: batuanTempleImage,
        description:
          "Built in the eleventh century, Batuan Temple is a beautiful historic site located near Ubud that showcases classic Balinese architecture. The temple grounds are filled with detailed stone carvings that tell stories of Hindu mythology and daily island life. As a dedicated place of worship, it provides a very peaceful and sacred atmosphere for visitors who want to learn about local spiritual traditions. It is an easy and rewarding stop for travelers looking to appreciate ancient art and enjoy a quiet moment in a beautiful cultural setting.",
      },
      {
        title: "Tegenungan Waterfall",
        image: tegenunganWaterfallImage,
        description:
          "Tegenungan Waterfall in Sukawati is a beautiful nature retreat surrounded by lush green tropical plants. Visitors can take a short walk down a clear path to reach the large natural pool at the base of the rushing water. It is a great place to take photos, enjoy the cool mist, or relax at nearby local food stalls. Because it is so close to the main tourist areas, it provides a very easy and refreshing escape into the beautiful natural landscape of Bali.",
      },
    ],
    tripInfo: {
      startTime: "08.00 AM – 08.30 AM",
      priceLocalIDR: 650_000,
      currencyLabel: "per day",
      minimumPax: 1,
      specialPriceNote: "Maximum 5 people per group",
    },
    inclusions: [
      "Fuel",
      "Air-conditioned & clean interior",
      "English-speaking driver",
      "Tour consultancy",
    ],
    exclusions: [
      "Tickets or entrance fees",
      "Toll roads (if any)",
      "Your personal expenses",
    ],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Sanur",
        "Ubud",
      ],
    },
  },
  {
    slug: "art-village-batuan-temple-tour",
    name: "Art Village & Batuan Temple Tour",
    image: celukVillageImage,
    priceStartFromIDR: 500_000,
    destinationCount: 3,
    description:
      "A half-day cultural tour through Bali's finest artisan village, ancient temple, and highland coffee plantation.",
    overview:
      "This half-day Bali tour takes you on a culturally rich journey through three of Gianyar's most rewarding stops. Browse stunning gold and silver handicrafts at Celuk Village, step inside the ornate grounds of Batuan Temple, and enjoy a relaxing coffee tasting session at a traditional Balinese plantation. Perfect for travelers who want an authentic cultural experience without a full-day commitment.",

    destinations: [
      {
        title: "Celuk Village",
        image: celukVillageImage,
        description:
          "Nestled in the Gianyar Regency near Ubud, Celuk Village is Bali's most celebrated center for gold and silver craftsmanship. This charming highland village shares the warm mountain culture of the surrounding Ubud area, yet stands apart for its extraordinary handicraft tradition. Browse a wide selection of intricately handcrafted gold and silver jewelry and ornaments, all produced by skilled local artisans and available at surprisingly affordable prices. It is the ideal destination for travelers looking to bring home a one-of-a-kind piece of authentic Balinese artistry.",
      },
      {
        title: "Batuan Temple",
        image: batuanTempleImage,
        description:
          "Pura Puseh Batuan is a beautifully preserved Balinese Hindu temple that has been lovingly maintained by the local Batuan community for centuries. The temple is a true showcase of traditional Balinese craftsmanship, adorned with elaborate stone carvings and ornate decorations throughout its sacred grounds. Its distinctive roof, crafted from the black fiber of the chromatic palm tree, gives the complex a timeless and striking appearance. Conveniently located along the main road between Denpasar and Ubud, Batuan Temple is an easy and enriching stop for anyone exploring the cultural heartland of Bali.",
      },
      {
        title: "Coffee Plantation",
        image: coffeePlantationImage,
        description:
          "Bali Agrotourism is a lush working plantation set amid the verdant valleys of the Balinese highlands. Walk through gardens filled with robusta coffee, salak, cacao, jackfruit, durian, and more as knowledgeable guides demonstrate traditional coffee roasting and brewing methods passed down through generations. Treat yourself to a complimentary tasting of freshly brewed Balinese coffee or warming ginger tea while soaking in the scenic river valley views. You can also meet the famous civet cat responsible for the world-renowned Kopi Luwak, and pick up locally made coffee blends, herbal oils, and spice products to take home.",
      },
    ],
    tripInfo: {
      startTime: "08.30 AM – 09.00 AM",
      priceLocalIDR: 500_000,
      currencyLabel: "per car",
      minimumPax: 1,
      specialPriceNote: "Maximum 5 people per car",
    },
    itinerary: [
      { time: "08:30 AM", activity: "Pickup from hotel" },
      { time: "09:30 AM", activity: "Visit Celuk Village" },
      { time: "11:00 AM", activity: "Visit Batuan Temple" },
      { time: "12:00 PM", activity: "Visit Coffee Plantation" },
      { time: "02:30 PM", activity: "Drop off at hotel" },
    ],
    inclusions: [
      "Clean and air-conditioned car",
      "Professional and friendly driver",
      "Pick up directly from hotel or villa",
      "Mineral water and travel tissues",
      "Maximum duration: ±6 hours",
    ],
    exclusions: [
      "Tickets or entrance fees",
      "Toll roads (if any)",
      "Your personal expenses",
    ],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Kerobokan",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Pecatu",
        "Uluwatu",
      ],
    },
  },
  {
    slug: "atv-ride-river-rafting",
    name: "ATV Ride & River Rafting Adventure",
    image: atvAdventureImage,
    priceStartFromIDR: 800_000,
    destinationCount: 2,
    description:
      "Combine an adrenaline-packed ATV quad bike ride with thrilling white water rafting in one unforgettable Bali adventure day.",
    overview:
      "Get your heart pumping with two of Bali's most exciting outdoor activities in a single action-packed day. Start with an exhilarating ATV quad bike ride through the island's stunning countryside, then cool off with a white water river rafting adventure. Both experiences include professional instructors, full safety equipment, and a delicious buffet lunch.",

    destinations: [
      {
        title: "ATV Ride Adventure",
        image: atvAdventureImage,
        description:
          "Hop on a powerful quad bike and embark on a 90-minute off-road adventure through the breathtaking Bali countryside. After a thorough safety briefing from an experienced instructor, you will ride through terraced rice paddies, dense bamboo forests, hidden jungle trails, shallow river crossings, and peaceful local villages. Every turn delivers a new stunning panorama that captures the raw natural beauty of the island. Whether you are a first-time rider or an experienced adventurer, this ATV experience offers the perfect blend of outdoor excitement and scenic exploration that you simply cannot find anywhere else.",
      },
      {
        title: "Water River Rafting",
        image: raftingImage,
        description:
          "Take on the rushing rapids of one of Bali's most scenic rivers during a thrilling two-hour white water rafting experience. Guided by professional instructors, you will paddle through dramatic gorges lined with towering tropical trees, ancient stone carvings, and cascading waterfalls. The combination of exciting Class II and III rapids with stretches of calm water makes this adventure suitable for both beginners and experienced rafters. After the ride, enjoy a well-earned buffet lunch while surrounded by lush jungle scenery. It is the ultimate way to cool off and connect with Bali's stunning natural landscape.",
      },
    ],
    tripInfo: {
      startTime: "09.30 AM",
      priceLocalIDR: 800_000,
      currencyLabel: "per person (Single ATV)",
      minimumPax: 1,
      specialPriceNote:
        "ATV Tandem: IDR 1,400,000 per 2 people | Rafting: IDR 450,000 per person | Transport from IDR 400,000 per car (max 5)",
    },

    inclusions: [
      "Welcome drink",
      "Professional instructor",
      "Safety equipment",
      "Buffet lunch, towel, shower, locker, Wi-Fi",
      "Insurance",
    ],
    exclusions: [
      "Private transportation (optional, from IDR 400,000 per car)",
      "Your personal expenses",
    ],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Sanur",
        "Ubud",
      ],
    },
  },
  {
    slug: "ubud-swing-temple-waterfall-tour",
    name: "Ubud Swing, Temple & Waterfall Tour",
    image: monkeyForestImage,
    priceStartFromIDR: 700_000,
    destinationCount: 5,
    description:
      "Swing over the jungle, explore ancient temples, visit artisan villages, and cool off at a stunning waterfall on this full-day Ubud tour.",
    overview:
      "Experience the very best of Central Bali on this action-packed day tour through Ubud and its surroundings. Browse authentic Balinese batik, gold and silver jewelry, paintings, and wood carvings at a local art village. Step into the sacred grounds of the ancient Batuan Temple. Feel the thrill of the famous Ubud Swing high above the tropical canopy. Walk among playful monkeys at the Sacred Monkey Forest. Then finish with a refreshing visit to the beautiful Tegenungan Waterfall.",

    destinations: [
      {
        title: "Art Village",
        image: artVillageImage,
        description:
          "Immerse yourself in the living cultural heritage of Bali at a traditional art village near Ubud. Here you will find a vibrant collection of handmade Balinese batik with deeply symbolic motifs, exquisite gold and silver jewelry crafted by master artisans from Celuk village, expressive paintings that blend mythology with everyday island life, and intricate wood carvings from the renowned workshops of Mas village. Each piece reflects generations of artistic skill and spiritual meaning. Watch craftsmen at work, learn about their age-old techniques, and take home a truly authentic piece of Balinese art directly from the makers.",
      },
      {
        title: "Batuan Temple",
        image: batuanTempleImage,
        description:
          "Step into the ancient grounds of Batuan Temple, one of the oldest and most beautifully decorated sacred sites in Bali. Founded around 1020 AD as part of the Tri Kahyangan temple system, this revered Hindu sanctuary features magnificent split gates, elaborate stone carvings depicting mythological scenes, and distinctive shrine roofs made from dark palm fiber. The entire complex radiates a powerful spiritual atmosphere that has drawn worshippers and visitors for over a thousand years. Conveniently located on the main route between Denpasar and Ubud, Batuan Temple offers a deeply enriching window into the religious traditions and artistic mastery that define Balinese culture.",
      },
      {
        title: "Ubud Swing",
        image: ubudSwingImage,
        description:
          "Soar high above the lush Bali jungle on the iconic Ubud Swing, one of the island's most thrilling and photogenic adventure activities. Suspended over a dramatic river valley surrounded by towering tropical trees, each swing launches you into a breathtaking panorama of dense green forest stretching as far as the eye can see. Whether you are seeking an adrenaline rush or the perfect Instagram shot, this unforgettable experience delivers an entirely unique perspective of Bali's natural beauty that you simply cannot find anywhere else on the island.",
      },
      {
        title: "Monkey Forest Ubud",
        image: monkeyForestImage,
        description:
          "Wander through the enchanting Sacred Monkey Forest in the heart of Ubud, a magical nature sanctuary that perfectly blends wildlife, ancient culture, and tropical beauty. Home to over one thousand playful long-tailed macaques, this lush forest features shaded walkways that wind past moss-covered stone statues, elegant bridges, and three sacred Hindu temples still actively used by the local community. It is a rare destination where the connection between humans, nature, and spirituality feels truly alive. Suitable for all ages, Monkey Forest Ubud is an essential stop for anyone exploring Central Bali.",
      },
      {
        title: "Tegenungan Waterfall",
        image: tegenunganWaterfallImage,
        description:
          "Discover the stunning beauty of Tegenungan Waterfall, a refreshing natural retreat hidden among the lush tropical greenery of Sukawati. A well-maintained path leads you down to the base of the falls where a wide natural pool awaits, surrounded by towering green vegetation and the soothing sound of cascading water. Early morning visits offer the most magical atmosphere as golden sunlight filters through the verdant jungle canopy above. With charming local food stalls and scenic photo spots nearby, Tegenungan is the perfect easy escape into the breathtaking natural landscape of Bali.",
      },
    ],
    tripInfo: {
      startTime: "08.00 AM – 08.30 AM",
      priceLocalIDR: 700_000,
      currencyLabel: "per car",
      minimumPax: 1,
      specialPriceNote: "Maximum 5 people per car",
    },
    itinerary: [
      { time: "", activity: "Pickup from hotel" },
      {
        time: "",
        activity:
          "Visit Art Village (Batik, Gold & Silver, Painting, Wood Carving)",
      },
      { time: "", activity: "Visit Batuan Temple" },
      { time: "", activity: "Ubud Swing" },
      { time: "", activity: "Monkey Forest Ubud" },
      { time: "", activity: "Tegenungan Waterfall" },
      { time: "", activity: "Drop off at hotel" },
    ],
    inclusions: [
      "Hotel pick up and transfer with English-speaking driver",
      "Parking fees",
      "Petrol",
    ],
    exclusions: ["Tickets or entrance fees", "Your personal expenses"],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Kerobokan",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Pecatu",
        "Uluwatu",
      ],
    },
  },
  {
    slug: "mount-batur-sunrise-jeep-tour",
    name: "Mount Batur Sunrise Jeep Adventure",
    image: jeepBaturImage,
    priceStartFromIDR: 700_000,
    destinationCount: 2,
    description:
      "Watch a magical sunrise over Mount Batur volcano from a rugged 4x4 Jeep and explore the dramatic black lava fields of Kintamani.",
    overview:
      "Set out before dawn for one of Bali's most unforgettable experiences. Board a powerful 4x4 Jeep and drive up the slopes of Mount Batur, one of the island's most active volcanoes, to witness a breathtaking sunrise from a secret viewpoint. After the golden light fills the sky, continue your Jeep adventure across the vast black lava fields left by historic eruptions while learning about the volcano's incredible geological story. An optional visit to natural hot springs is available to complete the morning.",

    destinations: [
      {
        title: "Jeep Batur Sunrise",
        image: jeepBaturImage,
        description:
          "Experience the most spectacular sunrise in Bali from the slopes of Mount Batur, a famous active volcano in the Kintamani highlands. Climb aboard a custom-built 4x4 Jeep and ride up the mountain to a rarely visited viewpoint far from the crowds. As the first golden rays break over the horizon, you will witness a stunning panorama of the volcanic crater, the shimmering waters of Lake Batur below, and the towering silhouette of Mount Agung in the distance. Your expert local driver will share fascinating stories about the volcano's history, including the details of its biggest eruptions. It is a once-in-a-lifetime dawn experience that captures the raw, untamed beauty of Bali's volcanic heartland.",
      },
      {
        title: "Mount Batur Black Lava",
        image: blackLavaImage,
        description:
          "After witnessing the magical sunrise, continue your 4x4 Jeep adventure across the dramatic black lava fields that stretch across the lower slopes of Mount Batur. These vast dark landscapes were shaped by powerful volcanic eruptions and offer an extraordinary and otherworldly atmosphere unlike anything else on the island. Your specialist Jeep driver will navigate through the rugged terrain, stopping at key viewpoints where you can step out and feel the raw volcanic ground beneath your feet. Learn about the geological forces that created this remarkable scenery and capture stunning photos of the contrast between the dark lava rock and the lush green vegetation slowly reclaiming the land. It is an exciting off-road journey that brings you face to face with the incredible volcanic power of Bali.",
      },
    ],
    tripInfo: {
      startTime: "02.30 AM – 03.00 AM",
      priceLocalIDR: 800_000,
      currencyLabel: "per car (max 5 people)",
      minimumPax: 2,
      specialPriceNote:
        "2–3 people: IDR 350,000/person | 4 people: IDR 300,000/person | Optional hot spring from IDR 120,000/person",
    },
    importantNote:
      "This is an early morning tour. Pickup begins at 02:00–02:30 AM for South Bali areas and 03:00–03:30 AM for Ubud.",
    itinerary: [
      {
        time: "2:15 AM",
        activity: "Pickup from Nusa Dua, Jimbaran, Uluwatu, Canggu",
      },
      {
        time: "2:30 AM",
        activity: "Pickup from Kuta, Legian, Seminyak, Sanur",
      },
      { time: "3:00 AM", activity: "Pickup from Ubud" },
      { time: "4:30 AM", activity: "Arrive at Mount Batur" },
      { time: "5:10 AM", activity: "Batur Sunrise Jeep Tour" },
      { time: "7:15 AM", activity: "Explore Black Lava by 4WD Jeep" },
      { time: "8:20 AM", activity: "Return to meeting pickup point" },
    ],
    inclusions: [
      "Round trip transportation from hotel to start point",
      "Entrance fee to the village",
      "Jeep adventure",
      "Parking fees",
      "Bottled water",
    ],
    exclusions: ["Your personal expenses"],
    optionals: [
      {
        label: "Visit to Toya Devasya (hot spring)",
        price: "IDR 180,000/person",
      },
      {
        label: "Visit to Batur Natural (hot spring)",
        price: "IDR 120,000/person",
      },
    ],
    pickupDropoff: {
      description:
        "We will pick up directly from your hotel. Jimbaran, Nusa Dua, Kuta, Seminyak, Legian, Canggu and Sanur pickup at 02:00–02:30 AM. Ubud pickup at 03:00–03:30 AM.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Kerobokan",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Pecatu",
        "Uluwatu",
        "Sanur",
        "Ubud",
      ],
    },
  },
  {
    slug: "ayung-rafting-monkey-forest-tour",
    name: "Ayung River Rafting & Ubud Monkey Forest Tour",
    image: raftingImage,
    priceStartFromIDR: 450_000,
    destinationCount: 2,
    description:
      "Conquer the thrilling rapids of the Ayung River and explore the enchanting Sacred Monkey Forest in one unforgettable Ubud adventure day.",
    overview:
      "Combine two of Ubud's most exciting experiences into a single action-packed day. Start with a heart-pumping white water rafting session down the legendary Ayung River, surrounded by towering jungle cliffs and hidden waterfalls. After a satisfying buffet lunch, head into the mystical Sacred Monkey Forest to walk among hundreds of playful macaques and ancient Hindu temples draped in moss and tropical greenery.",

    destinations: [
      {
        title: "Ayung White Water Rafting",
        image: raftingImage,
        description:
          "Paddle through 12 exhilarating kilometers of the Ayung River, Bali's premier white water rafting destination near Ubud. With consistent Class II to III rapids running year-round in both wet and dry seasons, this adventure is perfectly suited for beginners and experienced rafters alike. Over roughly two hours, you will navigate exciting twists and turns flanked by dramatic jungle gorges, ancient stone carvings etched into the riverbanks, and cascading waterfalls hidden among the dense tropical vegetation. Expert rafting guides ensure a safe and thrilling experience from start to finish, making this one of the most popular outdoor activities on the entire island of Bali.",
      },
      {
        title: "Monkey Forest Ubud",
        image: monkeyForestImage,
        description:
          "Step into the enchanting Sacred Monkey Forest Sanctuary in the heart of Ubud, a revered Balinese Hindu site home to over 700 playful long-tailed macaques. These spirited monkeys are believed to serve as spiritual guardians protecting three ancient temples nestled within the lush forest: Pura Dalem Agung, Pura Beji, and Pura Prajapati. Wander along shaded pathways lined with towering banyan trees, moss-covered stone statues, and ornate shrines while observing the monkeys in their natural habitat. It is a captivating blend of wildlife, culture, and tropical beauty that offers a truly magical experience for visitors of all ages.",
      },
    ],
    tripInfo: {
      startTime: "08.30 AM – 09.00 AM",
      priceLocalIDR: 450_000,
      currencyLabel: "per person (rafting)",
      minimumPax: 1,
      specialPriceNote:
        "Get special price for 3–5 person rafting tickets | Optional private transport from IDR 650,000 per car (max 5)",
    },
    importantNote:
      "Please take a note that you need to be ready at the earliest time range for hotel pickup. Apart from departure time, the timetable below is an estimation only and may vary in the actual trip.",
    itinerary: [
      { time: "8:30 AM", activity: "Pickup from hotel" },
      { time: "9:45 AM", activity: "Arrive at rafting facility" },
      { time: "10:00 AM", activity: "Go down to Ayung River" },
      { time: "12:00 PM", activity: "Finish rafting & lunch buffet" },
      { time: "1:00 PM", activity: "Visit Monkey Forest" },
      { time: "2:30 PM", activity: "Back to hotel" },
    ],
    inclusions: [
      "Hotel pick up and transfer with English-speaking driver",
      "Experienced driver as guide",
      "Rafting equipment and guide",
      "Use of locker, towel, and shower",
      "Parking fees",
      "Lunch buffet",
      "Bottled water",
    ],
    exclusions: ["Monkey Forest entrance fee", "Your personal expenses"],
    optionals: [
      {
        label: "Private transport (max 5 people)",
        price: "IDR 650,000/car",
      },
    ],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Sanur",
        "Ubud",
      ],
    },
  },
  {
    slug: "uluwatu-tour",
    name: "Uluwatu Tour",
    image: uluwatuTempleImage,
    priceStartFromIDR: 850_000,
    destinationCount: 5,
    description:
      "Explore the stunning south coast of Bali with iconic temples, hidden beaches, dramatic cliffs, and a beachside seafood dinner.",
    overview:
      "Spend a full day discovering the breathtaking south coast of Bali on this Uluwatu Tour. Start at the monumental Garuda Wisnu Kencana Cultural Park, unwind on the pristine shores of Melasti Beach and Pandawa Beach, witness a spectacular sunset and Kecak dance performance at the clifftop Uluwatu Temple, and finish with a fresh seafood dinner right on the sand at Jimbaran Bay.",

    destinations: [
      {
        title: "GWK (Garuda Wisnu Kencana Cultural Park)",
        image: gwkImage,
        description:
          "Start your South Bali trip at GWK. See the huge 121 meter statue of Lord Vishnu on his Garuda bird, a strong symbol of Balinese culture. Walk through the gardens, watch cultural shows, and enjoy wide views of the ocean.",
      },
      {
        title: "Melasti Beach",
        image: melastiBeachImage,
        description:
          "Relax at Melasti Beach. It has soft white sand, clear blue water, and tall limestone cliffs. A quiet spot to swim, take photos, or simply enjoy the calm sea breeze away from crowds.",
      },
      {
        title: "Pandawa Beach",
        image: pandawaBeachImage,
        description:
          "Visit Pandawa Beach, a beautiful bay hidden behind high cliffs. Large stone statues of the Pandawa brothers stand along the shore. The beach offers white sand, calm water for swimming, and very scenic views.",
      },
      {
        title: "Uluwatu Temple (Kecak Dance)",
        image: uluwatuTempleImage,
        description:
          "Watch the sunset at Uluwatu Temple, an old temple on a high cliff above the ocean. The location is beautiful and sacred, though watch out for the monkeys. Finish the evening with the Kecak dance: a group of men chanting, fire, and the Ramayana story performed as the sky gets dark.",
      },
      {
        title: "Jimbaran Seafood (Dinner)",
        image: jimbaranSeafoodImage,
        description:
          "End the day with dinner on Jimbaran Beach. Sit on the sand and eat fresh grilled seafood such as lobster, prawns, fish, and clams. Waves roll in nearby, soft music plays, and the atmosphere feels relaxed and pleasant.",
      },
    ],
    tripInfo: {
      startTime: "08.30 AM \u2013 09.00 AM",
      priceLocalIDR: 850_000,
      currencyLabel: "per day",
      minimumPax: 1,
    },
    inclusions: [
      "Fuel",
      "Air-conditioned & clean interior",
      "English-speaking driver",
      "Tour consultancy",
    ],
    exclusions: [
      "Tickets or entrance fees",
      "Toll roads (if any)",
      "Your personal expenses",
    ],
    pickupDropoff: {
      description:
        "Available for accommodation in Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Denpasar, Sanur and Ubud. Please contact us if you are staying in remote area.",
      areas: [
        "Kuta",
        "Legian",
        "Seminyak",
        "Canggu",
        "Jimbaran",
        "Nusa Dua",
        "Denpasar",
        "Sanur",
        "Ubud",
      ],
    },
  },
];

export const packagesBySlug: Record<string, PackageContent> =
  packageList.reduce(
    (acc, pkg) => {
      acc[pkg.slug] = pkg;
      return acc;
    },
    {} as Record<string, PackageContent>,
  );

export const featuredPackages = packageList.slice(0, 4);

export const getPackageBySlug = (slug: string | undefined) =>
  slug ? packagesBySlug[slug] : undefined;

export const getAllPackages = () => packageList;
