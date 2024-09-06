import Footer from "@/ui/sections/footer";
import NavBar from "@/ui/sections/navbar";
import { HeroBanner } from "./(pages)/(home)/hero";
import { LandingSection } from "./(pages)/(home)/landing";
import { ProjectsSection } from "./(pages)/(home)/projects";
import { TestimonialsSection } from "./(pages)/(home)/testimonials";

export default function Home() {
  return (
    <main>
      <NavBar />
      <LandingSection />
      <HeroBanner />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
