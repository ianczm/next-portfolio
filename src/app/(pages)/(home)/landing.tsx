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
      className={cn("my-auto flex h-screen flex-col justify-center px-60", className)}
      {...props}
    >
      <div className="mt-20 flex items-center justify-between">
        {/* Main landing */}
        <div className="flex max-w-[810px] flex-col gap-10">
          <Heading2>
            Hey, I'm Ian <span className="text-light-100">👋</span>
          </Heading2>
          <Heading1>
            I'm a <span className="text-transparent">software engineer</span> with an interest in{" "}
            <span className="text-transparent">anything web.</span>
          </Heading1>
          <div>
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
          <Magnetic className="-m-4 rounded-full">
            <InlineLink href="/" className="block p-4">
              <SiGithub size={20} />
            </InlineLink>
          </Magnetic>
          <Magnetic className="-m-4 rounded-full">
            <InlineLink href="/" className="block p-4">
              <SiLinkedin size={20} />
            </InlineLink>
          </Magnetic>
          <Magnetic className="-m-4 rounded-full">
            <InlineLink href="/" className="block p-4">
              <SiInstagram size={20} />
            </InlineLink>
          </Magnetic>
          <Magnetic className="-m-4 rounded-full">
            <InlineLink href="/" className="block p-4">
              <SiGmail size={20} />
            </InlineLink>
          </Magnetic>
          <div className="h-full w-[1px] bg-light-100/40"></div>
        </div>
      </div>
    </div>
  );
}
