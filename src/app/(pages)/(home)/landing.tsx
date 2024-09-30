import Button from "@/ui/components/button";
import InlineLink from "@/ui/components/inline-link";
import Magnetic from "@/ui/components/interaction/magnetic";
import { Heading1, Heading2, Paragraph2 } from "@/ui/components/typography";
import { cn } from "@/ui/utils/tailwind";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "@icons-pack/react-simple-icons";
import { ComponentProps } from "react";

export function LandingSection({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto my-auto flex h-[calc(100dvh-5vw)] min-h-fit max-w-screen-2xl flex-col justify-center px-6 sm:px-8 md:px-20",
        className,
      )}
      {...props}
    >
      <div className="mt-20 flex items-center justify-between gap-32">
        {/* Main landing */}
        <div className="flex max-w-[810px] flex-col gap-10">
          <Heading2>
            Hey, I'm Ian Chong <span className="text-light-100">👋</span>
          </Heading2>
          <Heading1>
            I'm a <span className="text-transparent">fullstack developer</span> with a fascination
            for <span className="text-transparent">the web</span>
          </Heading1>
          <div>
            <Paragraph2>
              Currently building{" "}
              <InlineLink href="https://spring.io/projects/spring-boot" underline isExternal>
                Java Spring Boot
              </InlineLink>{" "}
              cloud services at{" "}
              <InlineLink href="https://www.hilti.com/" underline isExternal>
                Hilti
              </InlineLink>
            </Paragraph2>
          </div>
          <div className="mt-4 flex gap-3 md:gap-4">
            <Button intent="primary">Contact</Button>
            <Button>Projects</Button>
          </div>
        </div>
        {/* Channels */}
        <div className="hidden h-full flex-col items-center gap-10 md:flex">
          <div className="h-full w-[1px] bg-light-100/40"></div>
          <Magnetic className="-m-4 rounded-full">
            <InlineLink href="https://github.com/ianczm" className="block p-4" isExternal>
              <SiGithub size={20} />
            </InlineLink>
          </Magnetic>
          <Magnetic className="-m-4 rounded-full">
            <InlineLink href="https://www.linkedin.com/in/ianczm/" className="block p-4" isExternal>
              <SiLinkedin size={20} />
            </InlineLink>
          </Magnetic>
          <Magnetic className="-m-4 rounded-full">
            <InlineLink href="https://www.instagram.com/ianczm/" className="block p-4" isExternal>
              <SiInstagram size={20} />
            </InlineLink>
          </Magnetic>
          <Magnetic className="-m-4 rounded-full">
            <InlineLink href="mailto:ianczm@live.co.uk" className="block p-4">
              <SiGmail size={20} />
            </InlineLink>
          </Magnetic>
          <div className="h-full w-[1px] bg-light-100/40"></div>
        </div>
      </div>
    </div>
  );
}
