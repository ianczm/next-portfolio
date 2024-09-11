import LandingCanvas3D from "@/ui/components/3d/landing-canvas";
import Footer from "@/ui/sections/footer";
import NavBar from "@/ui/sections/navbar";
import { HeroBanner } from "./(pages)/(home)/hero";
import { LandingSection } from "./(pages)/(home)/landing";
import { ProjectsSection } from "./(pages)/(home)/projects";
import { TestimonialsSection } from "./(pages)/(home)/testimonials";

export default function Home() {
  return (
    <main className="relative">
      <LandingCanvas3D className="fixed -z-50 h-screen w-screen" />
      <NavBar />
      <LandingSection />
      <HeroBanner />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
