export interface Hobby {
  id: string;
  title: string;
  tagline: string;
  description: string;
  images?: string[];
}

export const hobbies: Hobby[] = [
  {
    id: "karting",
    title: "Karting",
    tagline: "The closest thing to racing without a license.",
    description:
      "I hit the local karting track whenever I can. There's something deeply satisfying about finding the perfect braking point and shaving tenths off your lap time. It's engineering intuition applied at 80 km/h.",
    images: [
      "/life/carting/IMG_20251002_144046.jpg",
      "/life/carting/IMG_20260111_150710.jpg",
      "/life/carting/IMG_20260117_143048_1.jpg",
    ],
  },
  {
    id: "cycling",
    title: "Cycling",
    tagline: "Two wheels, no motor, plenty of suffering.",
    description:
      "Road cycling is my way of clearing my head. Long weekend rides through the countryside, chasing KOMs on Strava, and occasionally bonking 60 km from home. The bike is a machine I understand completely — every component, every adjustment matters.",
    images: [
      "/life/%E9%AA%91%E8%A1%8C/IMG_20250914_093515.jpg",
      "/life/%E9%AA%91%E8%A1%8C/IMG_20231003_122114.jpg",
      "/life/%E9%AA%91%E8%A1%8C/IMG_20250914_093515.jpg",
      "/life/%E9%AA%91%E8%A1%8C/IMG_20250914_113423.jpg",
      "/life/%E9%AA%91%E8%A1%8C/IMG_20260304_124259.jpg",
      "/life/%E9%AA%91%E8%A1%8C/1757863797439.jpg",
      "/life/%E9%AA%91%E8%A1%8C/Image_1757826870437.jpg",
    ],
  },
  {
    id: "desk-setup",
    title: "Desk Setup",
    tagline: "Where the magic happens (and the cable management never ends).",
    description:
      "I spend a lot of time at my desk, so I've put real thought into making it a space I enjoy. Custom keyboard, carefully chosen peripherals, good lighting, clean cable routing. It's a perpetual work in progress.",
    images: [
      "/life/%E6%A1%8C%E6%90%AD/%E5%AE%BF%E8%88%8D2.jpg",
      "/life/%E6%A1%8C%E6%90%AD/%E5%B7%A5%E4%BD%8D1.jpg",
      "/life/%E6%A1%8C%E6%90%AD/%E5%B7%A5%E4%BD%8D2.jpg",
      "/life/%E6%A1%8C%E6%90%AD/%E5%B7%A5%E4%BD%8D3.jpg",
      "/life/%E6%A1%8C%E6%90%AD/%E5%B7%A5%E4%BD%8D4.jpg",
      "/life/%E6%A1%8C%E6%90%AD/%E5%AE%BF%E8%88%8D1.jpg",
      "/life/%E6%A1%8C%E6%90%AD/%E5%AE%BF%E8%88%8D2.jpg",
    ],
  },
  {
    id: "sim-racing",
    title: "Sim Racing",
    tagline: "Real physics, virtual consequences.",
    description:
      "When I can't get to a real track, I race in sim. A decent wheel and hours of practice on Assetto Corsa. It's surprisingly technical — setup tuning, telemetry analysis, racecraft. Basically engineering with a steering wheel.",
    images: [
      "/life/simrace/IMG_20250811_155134.jpg",
      "/life/simrace/IMG_20251012_152454.jpg",
      "/life/simrace/IMG_20260120_211313.jpg",
      "/life/simrace/IMG_20260214_143202.jpg",
      "/life/simrace/IMG_20260214_154630.jpg",
      "/life/simrace/Image_1767799681716_703.png",
    ],
  },
  {
    id: "3d-printing",
    title: "3D Printing",
    tagline: "From CAD to reality in a few hours.",
    description:
      "3D printing bridges my digital designs and the physical world. I print everything from robot parts and camera mounts to custom enclosures. Dialing in print settings is its own kind of engineering challenge.",
    images: [
      "/life/3d%E6%89%93%E5%8D%B0/3d%E6%89%93%E5%8D%B0%E4%BB%B6.jpg",
      "/life/3d%E6%89%93%E5%8D%B0/3d%E6%89%93%E5%8D%B0.jpg",
      "/life/3d%E6%89%93%E5%8D%B0/3d%E6%89%93%E5%8D%B0%E4%BB%B6.jpg",
      "/life/3d%E6%89%93%E5%8D%B0/3d%E6%89%93%E5%8D%B0%E6%91%84%E5%83%8F%E5%A4%B4%E5%9B%BA%E5%AE%9A.jpg",
    ],
  },
];
