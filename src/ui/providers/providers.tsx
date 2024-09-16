"use client";

import { SmoothScroll } from "@/lib/frontend/smooth-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode } from "react";

gsap.registerPlugin(useGSAP);

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: Readonly<ProvidersProps>) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
