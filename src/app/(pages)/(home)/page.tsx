import Footer from "@/ui/sections/footer";
import { HeroBanner } from "./hero";
import { LandingSection } from "./landing";
import { ProjectsSection } from "./projects";
import { TestimonialsSection } from "./testimonials";

export default function Home() {
  return (
    <>
      <LandingSection />
      <HeroBanner className="shadow-2xl" />
      <ProjectsSection />
      <TestimonialsSection className="shadow-2xl" />
      <Footer />
    </>
  );
}
