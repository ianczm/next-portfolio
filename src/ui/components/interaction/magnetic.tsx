"use client";

import { MouseEventElementWrapper } from "@/ui/utils/interaction/dimensions";
import { useGSAP } from "@gsap/react";
import gsap, { Elastic, Power4 } from "gsap";
import { cloneElement, MouseEventHandler, ReactElement, useRef } from "react";

interface MagneticProps {
  children: ReactElement;
  influence?: number;
  width?: number;
  height?: number;
}

export default function Magnetic({ children, influence = 5 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP({ dependencies: [], scope: ref });

  const onMouseMove: MouseEventHandler<HTMLButtonElement> = contextSafe((e) => {
    const eventWrapper = MouseEventElementWrapper.create(e.nativeEvent, ref.current!);
    const { x, y } = eventWrapper.getNormalizedDirectionToCursor().multiplyScalar(influence);

    gsap.to(ref.current, {
      x,
      y,
      ease: Power4.easeOut,
      duration: 0.5,
    });
  });

  const onMouseLeave: MouseEventHandler<HTMLButtonElement> = contextSafe((e) => {
    gsap.to(ref.current, { x: 0, y: 0, ease: Elastic.easeOut, duration: 0.75 });
  });

  return cloneElement(children, { ref, onMouseMove, onMouseLeave });
}
