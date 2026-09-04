import strength from "@/assets/program-strength.jpg";
import conditioning from "@/assets/program-conditioning.jpg";
import boxing from "@/assets/program-boxing.jpg";
import mobility from "@/assets/program-mobility.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";

export type Program = {
  name: string;
  image: string;
  summary: string;
  detail: string;
  level: string;
  duration: string;
};

export const programs: Program[] = [
  {
    name: "Strength",
    image: strength,
    summary: "Barbell-led programming built around squat, press, pull and hinge.",
    detail:
      "Twelve-week blocks with tracked loading, weekly technique review and a coach on the floor for every session.",
    level: "All levels",
    duration: "60 min",
  },
  {
    name: "Conditioning",
    image: conditioning,
    summary: "High-output engine work that builds capacity without wrecking recovery.",
    detail:
      "Intervals, sled work and carries programmed against heart-rate zones so effort stays measurable.",
    level: "Intermediate",
    duration: "45 min",
  },
  {
    name: "Boxing",
    image: boxing,
    summary: "Technical striking, footwork and pad work in a disciplined room.",
    detail:
      "Fundamentals first: stance, guard, distance. Sparring is optional and always supervised.",
    level: "All levels",
    duration: "60 min",
  },
  {
    name: "Mobility & Recovery",
    image: mobility,
    summary: "Structured mobility so you can keep training hard for years.",
    detail:
      "Joint prep, loaded stretching and breathing work, plus access to recovery tools after every class.",
    level: "All levels",
    duration: "40 min",
  },
];

export type Trainer = {
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string[];
};

export const trainers: Trainer[] = [
  {
    name: "Marcus Vale",
    role: "Head Strength Coach",
    image: trainer1,
    bio: "Fifteen years coaching barbell athletes, from first squat to national platform.",
    credentials: ["CSCS", "IPF Level 2", "15 yrs experience"],
  },
  {
    name: "Elena Rook",
    role: "Conditioning Lead",
    image: trainer2,
    bio: "Builds engines for field-sport athletes and busy professionals alike.",
    credentials: ["MSc Sport Science", "Endurance Cert.", "10 yrs experience"],
  },
  {
    name: "Dmitri Kane",
    role: "Boxing Coach",
    image: trainer3,
    bio: "Former amateur competitor focused on clean technique and calm heads.",
    credentials: ["Level 3 Boxing", "Ringside Cert.", "12 yrs experience"],
  },
  {
    name: "Nadia Frost",
    role: "Mobility & Recovery",
    image: trainer4,
    bio: "Keeps members training through the seasons with smart movement work.",
    credentials: ["Physio Assistant", "FRC Mobility", "8 yrs experience"],
  },
];

export const benefits = [
  {
    title: "Coach-Led Floor",
    body: "A qualified coach is on the floor at all hours. No guesswork, no bad reps left uncorrected.",
  },
  {
    title: "Serious Equipment",
    body: "Calibrated plates, competition bars, sleds and full rig space. Everything maintained weekly.",
  },
  {
    title: "Structured Programming",
    body: "Every member trains on a written plan with measurable progression, not random workouts.",
  },
  {
    title: "Focused Atmosphere",
    body: "Capped memberships and a strict floor etiquette keep the room quiet, clean and purposeful.",
  },
];
