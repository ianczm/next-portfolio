import Button from "@/ui/components/button";
import InlineLink from "@/ui/components/inline-link";
import { Heading1, Heading2, Paragraph2 } from "@/ui/components/typography";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "@icons-pack/react-simple-icons";

export function LandingSection() {
  return (
    <div className="my-auto flex h-screen flex-col justify-center px-60">
      <div className="mt-20 flex items-center justify-between">
        {/* Main landing */}
        <div className="flex max-w-[810px] flex-col gap-10">
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
        {/* Channels */}
        <div className="flex h-full flex-col items-center gap-10">
          <div className="h-full w-[1px] bg-light-100/40"></div>
          <a href="/">
            <SiGithub size={20} />
          </a>
          <a href="/">
            <SiLinkedin size={20} />
          </a>
          <a href="/">
            <SiInstagram size={20} />
          </a>
          <a href="/">
            <SiGmail size={20} />
          </a>
          <div className="h-full w-[1px] bg-light-100/40"></div>
        </div>
      </div>
    </div>
  );
}
