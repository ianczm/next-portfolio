"use client";

import { useGSAP } from "@gsap/react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ComponentProps, useRef } from "react";

interface ScrollSkewProps extends ComponentProps<"div"> {
  maxStrength?: number;
  targetVelocity?: number;
}

export default function ScrollSkew({
  children,
  className,
  maxStrength = 1.5,
  targetVelocity = 6000,
}: ScrollSkewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const transformToSkew = gsap.utils.pipe(
        gsap.utils.clamp(targetVelocity * -1, targetVelocity),
        gsap.utils.mapRange(0, targetVelocity, 0, maxStrength),
      );

      const skewTo = (skew: number) => {
        gsap.to(ref.current, { skewY: skew, duration: 1, ease: Power3.easeOut });
        console.log({ skewing: skew });
      };

      ScrollTrigger.create({
        trigger: ref.current,
        onUpdate: (scrollTrigger) => {
          const skew = transformToSkew(scrollTrigger.getVelocity());
          if (Math.abs(skew) < 0.1 || Math.abs(skew) > 1.4) {
            skewTo(0);
          } else {
            skewTo(skew);
          }
        },
      });
    },
    { dependencies: [children, ref], scope: ref, revertOnUpdate: true },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
