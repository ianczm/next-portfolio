import { ComponentProps } from "react";
import InlineLink from "../components/inline-link";
import NavLink from "../components/nav-link";
import { Heading1 } from "../components/typography/heading-1";
import { Paragraph1 } from "../components/typography/paragraph";
import { cn } from "../utils/tailwind";

export default function Footer({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("flex gap-32 p-60 pb-40")} {...props}>
      {/* Top */}
      <div className="flex flex-col justify-between gap-32">
        <div className="flex max-w-[810px] flex-col gap-10">
          <h2 className="text-gradient font-bold uppercase tracking-widest text-transparent">
            Get In Touch
          </h2>
          <Heading1 noGradient>Have an interesting opportunity to share?</Heading1>
          <a href="/" className="text-gradient text-5xl font-bold">
            <span className="text-transparent underline">Let's talk about it!</span>
          </a>
        </div>
        <div className="flex gap-6">
          <InlineLink href="">
            <span className="text-primary-400">@ 2024</span> Ian Chong.
          </InlineLink>
          <InlineLink href="">Privacy Policy.</InlineLink>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col justify-between gap-32">
        <div className="flex w-[500px] gap-10">
          <div className="flex w-full flex-col gap-10">
            <h2 className="text-gradient font-bold uppercase tracking-widest text-transparent">
              Explore
            </h2>
            <ul className="flex flex-col gap-5 text-2xl font-bold">
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
            <h2 className="text-gradient text-xl font-bold uppercase tracking-widest text-transparent">
              Connect
            </h2>
            <ul className="flex flex-col gap-5 text-2xl font-bold">
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
        <div className="w-[500px]">
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
            .
          </Paragraph1>
          <Paragraph1>
            Styled with{" "}
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
