import { HeroBanner } from "./(pages)/(home)/hero";
import { LandingSection } from "./(pages)/(home)/landing";
import { ProjectsSection } from "./(pages)/(home)/projects";
import { TestimonialsSection } from "./(pages)/(home)/testimonials";

export default function Home() {
  return (
    <>
      <LandingSection />
      <HeroBanner className="shadow-2xl" />
      <ProjectsSection />
      <TestimonialsSection className="shadow-2xl" />
    </>
  );
}
