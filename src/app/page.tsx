import LandingCanvas3D from "@/ui/components/3d/landing-canvas";
import { HeroBanner } from "./(pages)/(home)/hero";
import { LandingSection } from "./(pages)/(home)/landing";
import { ProjectsSection } from "./(pages)/(home)/projects";
import { TestimonialsSection } from "./(pages)/(home)/testimonials";

export default function Home() {
  return (
    <>
      <LandingCanvas3D className="fixed -z-50 h-screen w-screen" />
      <LandingSection />
      <HeroBanner className="shadow-2xl" />
      <ProjectsSection />
      <TestimonialsSection className="shadow-2xl" />
    </>
  );
}
