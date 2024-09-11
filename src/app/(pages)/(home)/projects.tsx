import { HOME_PROJECTS } from "@/data/frontend/projects";
import { Card } from "@/ui/components/card";
import { Heading1, Heading2 } from "@/ui/components/typography";
import { cn } from "@/ui/utils/tailwind";

export function ProjectsSection() {
  const projectColumns = [
    [HOME_PROJECTS[0], HOME_PROJECTS[1]],
    [HOME_PROJECTS[2], HOME_PROJECTS[3]],
  ];

  return (
    <div className="flex flex-col gap-16 p-60">
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
                className="h-[875px] w-[700px]"
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
