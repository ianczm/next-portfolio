import { ComponentProps } from "react";
import InlineLink from "../components/inline-link";
import { Heading1 } from "../components/typography/heading-1";
import { Heading2 } from "../components/typography/heading-2";
import { Paragraph1 } from "../components/typography/paragraph";
import { cn } from "../utils/tailwind";

interface FooterProps extends ComponentProps<"div"> {
  isSolidBackground?: boolean;
}

export default function Footer({ className, isSolidBackground = false, ...props }: FooterProps) {
  return (
    <div
      className={cn(
        {
          "bg-dark-400 shadow-2xl": isSolidBackground,
        },
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto grid max-w-screen-2xl p-6 pt-16 sm:p-8 md:p-20 md:pt-40 lg:grid-cols-[3fr_2fr] lg:grid-rows-[auto_auto] lg:gap-32",
        )}
      >
        {/*  */}
        <div className={cn("mb-16 flex flex-col gap-10 lg:mb-0")}>
          <Heading2>Get In Touch</Heading2>
          <Heading1 noGradient>Have an interesting opportunity to share?</Heading1>
          <a href="/" className="text-gradient text-3xl font-bold sm:text-4xl xl:text-5xl">
            <span className="text-transparent underline">Let's talk about it!</span>
          </a>
        </div>
        {/*  */}
        <div className={cn("mb-16 flex gap-16 sm:gap-32 lg:mb-0 lg:gap-16")}>
          <div className="flex flex-col gap-4 lg:w-full lg:gap-10">
            <Heading2>Explore</Heading2>
            <ul className="flex flex-col gap-3 text-lg font-bold sm:text-xl xl:gap-5 xl:text-2xl">
              <li>
                <InlineLink href="/">Home</InlineLink>
              </li>
              <li>
                <InlineLink href="/about">About</InlineLink>
              </li>
              <li>
                <InlineLink href="/about">Projects</InlineLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:w-full lg:gap-10">
            <Heading2>Connect</Heading2>
            <ul className="flex flex-col gap-3 text-lg font-bold sm:text-xl xl:gap-5 xl:text-2xl">
              <li>
                <InlineLink href="">GitHub</InlineLink>
              </li>
              <li>
                <InlineLink href="">LinkedIn</InlineLink>
              </li>
              <li>
                <InlineLink href="">Instagram</InlineLink>
              </li>
              <li>
                <InlineLink href="">Email</InlineLink>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="mb-10 w-full items-end lg:mb-0">
          <Paragraph1>
            Designed in{" "}
            <InlineLink href="https://www.figma.com/" underline>
              Figma
            </InlineLink>
            .
          </Paragraph1>
          <Paragraph1>
            Built with{" "}
            <InlineLink href="https://react.dev/" underline>
              React
            </InlineLink>{" "}
            and{" "}
            <InlineLink href="https://nextjs.org/" underline>
              Next.js
            </InlineLink>
            .
          </Paragraph1>
          <Paragraph1>
            Styled with{" "}
            <InlineLink href="https://tailwindcss.com/" underline>
              Tailwind CSS
            </InlineLink>
            .
          </Paragraph1>
        </div>
        {/*  */}
        <div className="flex items-end gap-6">
          <Paragraph1>
            <InlineLink href="">
              <span className="text-primary-400">@ 2024</span> Ian Chong.
            </InlineLink>
          </Paragraph1>
        </div>
      </div>
    </div>
  );
}
