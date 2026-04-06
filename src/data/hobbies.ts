export interface Hobby {
  id: string;
  title: string;
  tagline: string;
  description: string;
}

export const hobbies: Hobby[] = [
  {
    id: "karting",
    title: "Karting",
    tagline: "The closest thing to racing without a license.",
    description:
      "I hit the local karting track whenever I can. There's something deeply satisfying about finding the perfect braking point and shaving tenths off your lap time. It's engineering intuition applied at 80 km/h.",
  },
  {
    id: "cycling",
    title: "Cycling",
    tagline: "Two wheels, no motor, plenty of suffering.",
    description:
      "Road cycling is my way of clearing my head. Long weekend rides through the countryside, chasing KOMs on Strava, and occasionally bonking 60 km from home. The bike is a machine I understand completely — every component, every adjustment matters.",
  },
  {
    id: "desk-setup",
    title: "Desk Setup",
    tagline: "Where the magic happens (and the cable management never ends).",
    description:
      "I spend a lot of time at my desk, so I've put real thought into making it a space I enjoy. Custom keyboard, carefully chosen peripherals, good lighting, clean cable routing. It's a perpetual work in progress.",
  },
  {
    id: "photography",
    title: "Photography",
    tagline: "Capturing moments, mostly of things that don't move.",
    description:
      "I shoot street, architecture, and the occasional portrait. Photography forces me to slow down and notice details — light, composition, texture. It's a nice counterbalance to staring at code all day.",
  },
  {
    id: "sim-racing",
    title: "Sim Racing",
    tagline: "Real physics, virtual consequences.",
    description:
      "When I can't get to a real track, I race in sim. A decent wheel, triple monitors, and hours of practice on Assetto Corsa. It's surprisingly technical — setup tuning, telemetry analysis, racecraft. Basically engineering with a steering wheel.",
  },
  {
    id: "3d-printing",
    title: "3D Printing",
    tagline: "From CAD to reality in a few hours.",
    description:
      "3D printing bridges my digital designs and the physical world. I print everything from robot parts and keyboard cases to desk organizers and camera mounts. Dialing in print settings is its own kind of engineering challenge.",
  },
  {
    id: "electronics-tinkering",
    title: "Electronics Tinkering",
    tagline: "If it has a chip, I'll probably take it apart.",
    description:
      "I can't help myself — I mod, repair, and build electronic gadgets for fun. Flashing custom firmware on routers, building USB gadgets, fixing broken gear. My desk always has at least one device in pieces.",
  },
];
