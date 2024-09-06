import ShotdeskGurulab from "@/assets/images/shot-desk-gurulab.png";
import ShotdeskJourneyOfLife from "@/assets/images/shot-desk-journey-of-life.png";
import { Card } from "@/ui/components/card";
import { Heading1, Heading2 } from "@/ui/components/typography";

export function ProjectsSection() {
  return (
    <>
      <div className="relative">
        <div className="absolute -z-10 h-full w-full">
          <div className="absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D17E16]/20 blur-[200px]"></div>
          <div className="absolute left-2/3 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FB8842]/20 blur-[200px]"></div>
        </div>
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
            <div className="flex flex-col gap-10 pt-36">
              <Card src={ShotdeskGurulab} title="Gurulab" className="h-[875px] w-[700px]">
                Welcoming home page with a cheerful and bright design language for an EduTech
                startup.
              </Card>
              <Card
                src={ShotdeskJourneyOfLife}
                title="Journey of Life"
                className="h-[875px] w-[700px]"
              >
                Multiplayer game for event participants to experience the thrill of financial
                decision-making.
              </Card>
            </div>
            <div className="flex flex-col gap-10">
              <Card
                src={ShotdeskJourneyOfLife}
                title="This Portfolio"
                className="h-[875px] w-[700px]"
              >
                A milestone in establishing a personal brand and consolidating my skills.
              </Card>
              <Card src={ShotdeskGurulab} title="More Projects" className="h-[875px] w-[700px]">
                View other exciting ideas that I've been working on.
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
