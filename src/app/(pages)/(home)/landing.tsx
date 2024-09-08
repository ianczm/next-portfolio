import Button from "@/ui/components/button";
import InlineLink from "@/ui/components/inline-link";
import { Heading1, Heading2, Paragraph2 } from "@/ui/components/typography";

export function LandingSection() {
  return (
    <div className="relative">
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D17E16]/20 blur-[200px]"></div>
        <div className="absolute left-2/3 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FB8842]/20 blur-[200px]"></div>
      </div>
      <div className="flex h-screen flex-col justify-center px-60">
        <div className="mt-20 flex max-w-[810px] flex-col gap-10">
          <Heading2>
            Hey, I'm Ian <span className="text-light-100">👋</span>
          </Heading2>
          <Heading1>
            I love turning <span className="text-transparent">web ideas</span> into{" "}
            <span className="text-transparent">living and breathing spaces.</span>
          </Heading1>
          <div>
            <Paragraph2>
              I'm a fullstack web developer. Freelanced for frontend projects.
            </Paragraph2>
            <Paragraph2>
              Currently building{" "}
              <InlineLink href="https://spring.io/projects/spring-boot" underline>
                Java Spring Boot
              </InlineLink>{" "}
              cloud services at{" "}
              <InlineLink href="https://www.hilti.com/" underline>
                Hilti
              </InlineLink>
              .
            </Paragraph2>
          </div>
          <div className="mt-4 flex gap-4">
            <Button intent="primary">Contact</Button>
            <Button>Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
