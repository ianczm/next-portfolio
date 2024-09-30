import { MenuIcon } from "lucide-react";
import { ComponentProps } from "react";
import Button from "../components/button";
import ButtonLink from "../components/button-link";
import InlineLink from "../components/inline-link";
import IanczmLogo from "../components/logo";
import NavLink from "../components/nav-link";
import { cn } from "../utils/tailwind";

export default function NavBar({ className, ...props }: ComponentProps<"div">) {
  return (
    <nav className={cn("absolute left-0 top-0 z-50 w-full", className)} {...props}>
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 sm:p-8 md:px-20 md:py-10">
        <InlineLink href="/" className="-m-4 p-4">
          <IanczmLogo />
        </InlineLink>
        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex lg:gap-16 xl:gap-20">
          <NavLink href="/" className="-m-4 p-4">
            Home
          </NavLink>
          <NavLink href="/about" className="-m-4 p-4">
            About
          </NavLink>
          <NavLink href="/projects" className="-m-4 p-4">
            Projects
          </NavLink>
          <Button intent="primary">Contact</Button>
        </div>
        {/* Mobile */}
        <ButtonLink
          intent="primary"
          href="mailto:ianczm@live.co.uk"
          className="block aspect-square p-5 md:hidden"
        >
          <MenuIcon />
        </ButtonLink>
      </div>
    </nav>
  );
}
