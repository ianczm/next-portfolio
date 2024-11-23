import { SimpleProject } from "@/data/frontend/projects";
import Link from "next/link";
import { Key } from "react";
import { CardContent } from "./card-content";

const ProjectCard = ({ project, key }: { project: SimpleProject; key: Key }) => {
  const PopulatedCard = (
    <CardContent src={project.image} title={project.title} isClickable={!project.disabled}>
      {project.description}
    </CardContent>
  );

  if (!project.href) {
    return (
      <div key={key} className="relative shadow-xl">
        {PopulatedCard}
      </div>
    );
  }

  return (
    <Link key={key} className="relative shadow-xl" href={project.href}>
      {PopulatedCard}
    </Link>
  );
};

export default ProjectCard;
