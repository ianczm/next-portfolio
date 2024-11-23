import { PROJECT_COLUMNS } from "@/data/frontend/projects";
import ProjectCard from "@/ui/components/project-card";
import { Heading1, Heading2 } from "@/ui/components/typography";
import Footer from "@/ui/sections/footer";
import { cn } from "@/ui/utils/tailwind";

export default function ProjectsGalleryPage() {
  return (
    <>
      <div
        className={cn(
          "mx-auto flex max-w-screen-2xl flex-col gap-16 px-6 pb-16 pt-48 sm:px-8 md:px-20 md:pb-40 md:pt-60",
        )}
      >
        {/* Header */}
        <div className="flex max-w-[700px] flex-col gap-10">
          <Heading2>Projects Gallery</Heading2>
          <Heading1>
            Here is the archive of all <span className="text-transparent">my projects</span>
          </Heading1>
        </div>
        {/* Projects container */}
        <div className="flex flex-col gap-6 sm:gap-10 lg:flex-row">
          {PROJECT_COLUMNS.map((column, index) => (
            <div
              key={index}
              className={cn(`flex flex-col gap-6 sm:gap-10`, { "lg:pt-36": index === 0 })}
            >
              {column.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer isSolidBackground />
    </>
  );
}
