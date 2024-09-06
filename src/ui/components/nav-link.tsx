"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { cn } from "../utils/tailwind";

interface NavLinkProps extends ComponentProps<"a"> {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, className, children }: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn("transition-all hover:text-primary-400", { "font-bold": isActive }, className)}
    >
      {children}
    </Link>
  );
}
