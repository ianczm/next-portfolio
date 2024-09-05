import HeroGurulab from "@/assets/images/hero-gurulab.png";
import ShotdeskGurulab from "@/assets/images/shot-desk-gurulab.png";
import ShotdeskJourneyOfLife from "@/assets/images/shot-desk-journey-of-life.png";
import Button from "@/ui/components/button";
import InlineLink from "@/ui/components/inline-link";
import Footer from "@/ui/sections/footer";
import NavBar from "@/ui/sections/navbar";
import { cn } from "@/ui/utils/tailwind";
import { ArrowRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main>
      <NavBar />
      {/* Cover */}
      <div className="relative">
        <div className="absolute -z-10 h-full w-full">
          <div className="absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D17E16]/20 blur-[200px]"></div>
          <div className="absolute left-2/3 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FB8842]/20 blur-[200px]"></div>
        </div>
        <div className="px-60 pb-60 pt-80">
          <div className="flex max-w-[810px] flex-col gap-10">
            <h2 className="text-gradient font-bold uppercase tracking-widest">
              <span className="text-transparent">Hey there</span> 👋
            </h2>
            <h1 className="text-gradient text-6xl font-bold leading-tight tracking-tight">
              I love turning <span className="text-transparent">web ideas</span>{" "}
              into{" "}
              <span className="text-transparent">
                living and breathing spaces.
              </span>
            </h1>
            <div className="text-2xl leading-normal">
              <p>
                I'm a fullstack web developer. Freelanced for frontend projects.
              </p>
              <p>
                Currently building{" "}
                <InlineLink href="/" underline>
                  Java Spring Boot
                </InlineLink>{" "}
                cloud services at{" "}
                <InlineLink href="/" underline>
                  Hilti
                </InlineLink>
                .
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <Button intent="primary">Contact</Button>
              <Button>Projects</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="relative">
        <Image src={HeroGurulab} alt="Gurulab" className="h-auto w-full" />
        <div className="absolute bottom-0 p-60">
          <div className="flex max-w-[700px] flex-col gap-10">
            <h1 className="text-gradient text-6xl font-bold leading-tight tracking-tight">
              Crafting an experience means the careful blend of feel and
              function.
            </h1>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="relative">
        <div className="absolute -z-10 h-full w-full">
          <div className="absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D17E16]/20 blur-[200px]"></div>
          <div className="absolute left-2/3 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FB8842]/20 blur-[200px]"></div>
        </div>
        <div className="flex flex-col gap-16 p-60">
          {/* Header */}
          <div className="flex max-w-[700px] flex-col gap-10">
            <h2 className="text-gradient font-bold uppercase tracking-widest">
              <span className="text-transparent">Featured Projects</span>
            </h2>
            <h1 className="text-gradient text-6xl font-bold leading-tight tracking-tight">
              I've worked on some pretty{" "}
              <span className="text-transparent">fun projects.</span>
            </h1>
          </div>
          {/* Projects container */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 pt-36">
              <Card
                src={ShotdeskGurulab}
                title="Gurulab"
                className="h-[875px] w-[700px]"
              >
                Welcoming home page with a cheerful and bright design language
                for an EduTech startup.
              </Card>
              <Card
                src={ShotdeskJourneyOfLife}
                title="Journey of Life"
                className="h-[875px] w-[700px]"
              >
                Multiplayer game for event participants to experience the thrill
                of financial decision-making.
              </Card>
            </div>
            <div className="flex flex-col gap-10">
              <Card
                src={ShotdeskJourneyOfLife}
                title="This Portfolio"
                className="h-[875px] w-[700px]"
              >
                A milestone in establishing a personal brand and consolidating
                my skills.
              </Card>
              <Card
                src={ShotdeskGurulab}
                title="More Projects"
                className="h-[875px] w-[700px]"
              >
                View other exciting ideas that I've been working on.
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-[#1A1A1A]">
        <div className="flex flex-col gap-32 p-60">
          <div className="flex flex-col gap-10">
            <h2 className="text-gradient font-bold uppercase tracking-widest text-transparent">
              What Clients Said
            </h2>
            <hr />
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-10">
            <div>
              <h3 className="mb-10 text-4xl font-bold">GuruLab</h3>
              <p className="text-gradient font-bold">
                <span className="text-transparent">Emily Neoh</span>
              </p>
              <p>Curriculum Content Lead</p>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-balance text-3xl font-bold leading-relaxed">
                I enjoyed working with Ian. He grasped the project's principles
                and requirements quickly, delivering outcomes to a high
                standard. I also valued the enthusiasm and excellent
                communication that Ian brought, and would recommend his web
                development services with no hesitation.
              </p>
              <div className="flex gap-2">
                <Chip>Freelance</Chip>
                <Chip>Full business site</Chip>
                <Chip>Landing pages</Chip>
                <Chip>Layout and design</Chip>
                <Chip>Dynamic reports</Chip>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}

interface ChipProps {
  children: ReactNode;
}

function Chip({ children }: Readonly<ChipProps>) {
  return (
    <div className="rounded-full bg-[#FCBC84]/20 px-6 py-4 text-base font-bold leading-none text-[#FCBC84]">
      {children}
    </div>
  );
}

interface CardProps {
  src: string | StaticImport;
  title: string;
  children: ReactNode;
  className: string;
}

function Card({ src, title, children, className }: Readonly<CardProps>) {
  return (
    <div className={cn("relative", className)}>
      <Image src={src} alt={title} className="h-full w-full object-cover" />
      <div className="absolute bottom-0 flex items-end gap-20 p-16">
        <div>
          <h3 className="mb-5 text-4xl font-bold">{title}</h3>
          <p className="text-balance text-2xl leading-normal">{children}</p>
        </div>
        <ArrowRight className="flex-shrink-0" size={48} strokeWidth={1.5} />
      </div>
    </div>
  );
}
