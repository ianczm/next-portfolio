import ShotdeskEcotect from "@/assets/images/shot-desk-ecotect.png";
import ShotdeskGurulab from "@/assets/images/shot-desk-gurulab.png";
import ShotdeskJourneyOfLife from "@/assets/images/shot-desk-journey-of-life.png";
import ShotdeskMoreProjects from "@/assets/images/shot-desk-more-projects.png";
import ShotdeskPortfolioV1 from "@/assets/images/shot-desk-portfolio-v1.png";
import ShotdeskSeaerials from "@/assets/images/shot-desk-seaerials.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SimpleProject = {
  id: number;
  image: string | StaticImport;
  title: string;
  description: string;
  href?: string;
  disabled?: boolean;
};

export const PROJECTS_COLUMN_RIGHT: SimpleProject[] = [
  {
    id: 2,
    image: ShotdeskPortfolioV1,
    title: "Portfolio v1",
    description: "A personal project for me to try out new things",
  },
  {
    id: 4,
    image: ShotdeskSeaerials,
    title: "Southeast Aerials",
    description: "Web design for cutting-edge drone services",
  },
  {
    id: 6,
    image: ShotdeskMoreProjects,
    title: "Coming Soon",
    description: "More projects are in the works, check back again for updates!",
    disabled: true,
  },
];

export const PROJECTS_COLUMN_LEFT: SimpleProject[] = [
  {
    id: 1,
    image: ShotdeskGurulab,
    title: "GuruLab",
    description: "Bright and cheerful home page revamp for an EduTech startup",
    href: "/projects/gurulab",
  },
  {
    id: 3,
    image: ShotdeskEcotect,
    title: "Ecotect",
    description: "An e-commerce MVP site for a sustainable textiles startup",
  },
  {
    id: 5,
    image: ShotdeskJourneyOfLife,
    title: "Journey of Life",
    description: "Multiplayer game about financial decision-making for an event",
  },
];

export const PROJECT_COLUMNS: SimpleProject[][] = [PROJECTS_COLUMN_LEFT, PROJECTS_COLUMN_RIGHT];
