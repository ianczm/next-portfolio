import { ComponentProps } from "react";
import InlineLink from "../components/inline-link";
import NavLink from "../components/nav-link";
import { Heading1 } from "../components/typography/heading-1";
import { Heading2 } from "../components/typography/heading-2";
import { Paragraph1 } from "../components/typography/paragraph";
import { cn } from "../utils/tailwind";

export default function Footer({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto flex max-w-screen-2xl gap-32 px-20 pb-20 pt-40")} {...props}>
      {/* Top */}
      <div className="flex flex-col justify-between gap-32">
        <div className="flex flex-col gap-10">
          <Heading2>Get In Touch</Heading2>
          <Heading1 noGradient>Have an interesting opportunity to share?</Heading1>
          <a href="/" className="text-gradient text-4xl font-bold xl:text-5xl">
            <span className="text-transparent underline">Let's talk about it!</span>
          </a>
        </div>
        <div className="flex gap-6">
          <Paragraph1>
            <InlineLink href="">
              <span className="text-primary-400">@ 2024</span> Ian Chong.
            </InlineLink>
          </Paragraph1>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex max-w-[500px] flex-shrink-[1.5] flex-col justify-between gap-32">
        <div className="flex gap-20">
          <div className="flex w-full flex-col gap-10">
            <Heading2>Explore</Heading2>
            <ul className="flex flex-col gap-3 text-xl font-bold xl:gap-5 xl:text-2xl">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              <li>
                <NavLink href="/about">Projects</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-col gap-10">
            <Heading2>Connect</Heading2>
            <ul className="flex flex-col gap-3 text-xl font-bold xl:gap-5 xl:text-2xl">
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
        <div className="w-full">
          <Paragraph1>
            Designed in{" "}
            <InlineLink href="https://www.figma.com/" underline>
              Figma.
            </InlineLink>{" "}
            Built with{" "}
            <InlineLink href="https://react.dev/" underline>
              React
            </InlineLink>{" "}
            and{" "}
            <InlineLink href="https://nextjs.org/" underline>
              Next.js
            </InlineLink>
            . Styled with{" "}
            <InlineLink href="https://tailwindcss.com/" underline>
              Tailwind CSS
            </InlineLink>{" "}
            and lots of <InlineLink underline>love</InlineLink>.
          </Paragraph1>
        </div>
      </div>
    </div>
  );
}
