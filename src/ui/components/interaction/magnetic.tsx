"use client";

import { MouseEventElementWrapper } from "@/ui/utils/interaction/dimensions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ComponentProps, MouseEventHandler, ReactElement, useRef } from "react";
import { Magnetism } from "./constants";

interface MagneticProps extends ComponentProps<"div"> {
  children: ReactElement;
  influence?: number;
}

/**
 * Magnetic (currently children elements are not allowed to have event listeners)
 * @param magneticProps influence default = 5
 * @returns Children cloned with GSAP-enabled hover effects
 */
export default function Magnetic({ children, influence = 5, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ dependencies: [ref, children], scope: ref });

  const onMouseMove: MouseEventHandler<HTMLDivElement> = contextSafe((e) => {
    const eventWrapper = MouseEventElementWrapper.create(e.nativeEvent, ref.current!);
    const { x, y } = eventWrapper.getNormalizedDirectionToCursor().multiplyScalar(influence);
    gsap.to(ref.current, { x, y, ...Magnetism.RATIO.magnetize });
  });

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = contextSafe((e) => {
    gsap.to(ref.current, { x: 0, y: 0, ...Magnetism.RATIO.demagnetize });
  });

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  );
}
