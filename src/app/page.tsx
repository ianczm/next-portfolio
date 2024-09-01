import Button from "@/ui/components/button";
import InlineLink from "@/ui/components/inline-link";
import NavBar from "@/ui/sections/navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
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
              <InlineLink href="/">Java Spring Boot</InlineLink> cloud services
              at <InlineLink href="/">Hilti</InlineLink>.
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            <Button>Contact</Button>
            <Button>Projects</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
