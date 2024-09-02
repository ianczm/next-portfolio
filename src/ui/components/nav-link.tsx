"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "../utils/tailwind";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={cn({ "font-bold": isActive })}>
      {children}
    </Link>
  );
}
