import { ComponentProps } from "react";
import Button from "../components/button";
import InlineLink from "../components/inline-link";
import IanczmLogo from "../components/logo";
import NavLink from "../components/nav-link";
import { cn } from "../utils/tailwind";

export default function NavBar({ className, ...props }: ComponentProps<"div">) {
  return (
    <nav
      className={cn(
        "absolute left-0 top-0 z-50 flex w-full items-center justify-between px-60 py-20",
        className,
      )}
      {...props}
    >
      <InlineLink href="/" className="-m-4 p-4">
        <IanczmLogo />
      </InlineLink>
      <div className="flex items-center gap-20">
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
    </nav>
  );
}
