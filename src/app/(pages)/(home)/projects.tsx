import { HOME_PROJECTS } from "@/data/frontend/projects";
import { Card } from "@/ui/components/card";
import { Heading1, Heading2 } from "@/ui/components/typography";
import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

export function ProjectsSection({ className, ...props }: ComponentProps<"div">) {
  const projectColumns = [
    [HOME_PROJECTS[0], HOME_PROJECTS[1]],
    [HOME_PROJECTS[2], HOME_PROJECTS[3]],
  ];

  return (
    <div
      className={cn("mx-auto flex max-w-screen-2xl flex-col gap-16 px-20 py-40", className)}
      {...props}
    >
      {/* Header */}
      <div className="flex max-w-[700px] flex-col gap-10">
        <Heading2>Featured Projects</Heading2>
        <Heading1>
          I've worked on some <br /> pretty <span className="text-transparent">fun projects</span>
        </Heading1>
      </div>
      {/* Projects container */}
      <div className="flex flex-col gap-10 lg:flex-row">
        {projectColumns.map((column, index) => (
          <div key={index} className={cn(`flex flex-col gap-10`, { "lg:pt-36": index === 0 })}>
            {column.map((project) => (
              <Card
                key={project.id}
                src={project.image}
                title={project.title}
                href={project.href}
                className="shadow-xl"
              >
                {project.description}
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
