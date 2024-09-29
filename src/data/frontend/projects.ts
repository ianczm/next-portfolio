import ShotdeskGurulab from "@/assets/images/shot-desk-gurulab.png";
import ShotdeskJourneyOfLife from "@/assets/images/shot-desk-journey-of-life.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type SimpleProject = {
  id: number;
  image: string | StaticImport;
  title: string;
  description: string;
  href?: string;
};

export const HOME_PROJECTS: SimpleProject[] = [
  {
    id: 1,
    image: ShotdeskGurulab,
    title: "GuruLab",
    description:
      "Welcoming home page with a cheerful and bright design language for an EduTech startup.",
    href: "/projects/gurulab",
  },
  {
    id: 2,
    image: ShotdeskJourneyOfLife,
    title: "Journey of Life",
    description:
      "Multiplayer game for event participants to experience the thrill of financial decision-making.",
  },
  {
    id: 3,
    image: ShotdeskJourneyOfLife,
    title: "This Portfolio",
    description: "A milestone in establishing a personal brand and consolidating my skills.",
  },
  {
    id: 4,
    image: ShotdeskGurulab,
    title: "More Projects",
    description: "View other exciting ideas that I've been working on.",
  },
];
