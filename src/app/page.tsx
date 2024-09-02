import HeroGurulab from "@/assets/images/hero-gurulab.png";
import Button from "@/ui/components/button";
import InlineLink from "@/ui/components/inline-link";
import NavBar from "@/ui/sections/navbar";
import Image from "next/image";

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
            <h2 className="text-gradient font-bold uppercase tracking-widest text-transparent">
              Hey there 👋
            </h2>
            <h1 className="text-gradient text-6xl font-bold leading-tight tracking-tight">
              I love turning <span className="text-transparent">web ideas</span>{" "}
              into{" "}
              <span className="text-transparent">
                living and breathing spaces.
              </span>
            </h1>
            <div>
              <p>
                I'm a fullstack web developer. Freelanced for frontend projects.
              </p>
              <p>
                Currently building{" "}
                <InlineLink href="/">Java Spring Boot</InlineLink> cloud
                services at <InlineLink href="/">Hilti</InlineLink>.
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <Button>Contact</Button>
              <Button>Projects</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="relative">
        <Image src={HeroGurulab} alt="Gurulab" className="h-auto w-full" />
        <div className="absolute bottom-0 px-60 pb-[210px] pt-80">
          <div className="flex max-w-[700px] flex-col gap-10">
            <h1 className="text-gradient text-6xl font-bold leading-tight tracking-tight">
              Crafting an experience means the careful blend of feel and
              function.
            </h1>
          </div>
        </div>
      </div>
      {/* Projects */}
    </main>
  );
}
