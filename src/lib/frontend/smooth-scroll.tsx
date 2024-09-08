"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "./lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
