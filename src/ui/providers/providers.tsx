"use client";

import { SmoothScroll } from "@/lib/frontend/smooth-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, Suspense } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <Suspense>
      <SmoothScroll>{children}</SmoothScroll>
    </Suspense>
  );
}
