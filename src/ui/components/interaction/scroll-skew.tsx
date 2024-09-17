"use client";

import { useGSAP } from "@gsap/react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ComponentProps, useRef } from "react";

export default function ScrollSkew({ children, className }: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const transformToSkew = gsap.utils.mapRange(0, 4000, 0, 1.5);

      const skewTo = (skew: number) => {
        gsap.to(ref.current, { skewY: skew, duration: 1, ease: Power3.easeOut });
      };

      ScrollTrigger.create({
        trigger: ref.current,
        onUpdate: (scrollTrigger) => {
          const skew = transformToSkew(scrollTrigger.getVelocity());
          if (Math.abs(skew) < 0.1) {
            skewTo(0);
          } else {
            skewTo(skew);
          }
        },
      });
    },
    { dependencies: [], scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
