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
    <div className={cn("flex flex-col gap-16 p-60", className)} {...props}>
      {/* Header */}
      <div className="flex max-w-[700px] flex-col gap-10">
        <Heading2>Featured Projects</Heading2>
        <Heading1>
          I've worked on some pretty <span className="text-transparent">fun projects.</span>
        </Heading1>
      </div>
      {/* Projects container */}
      <div className="flex gap-10">
        {projectColumns.map((column, index) => (
          <div key={index} className={cn(`flex flex-col gap-10`, { "pt-36": index === 0 })}>
            {column.map((project) => (
              <Card
                key={project.id}
                src={project.image}
                title={project.title}
                className="h-[875px] w-[700px] shadow-xl"
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
