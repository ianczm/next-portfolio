"use client";

import { cn } from "@/ui/utils/tailwind";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentProps, useRef } from "react";

interface ArticleImageProps extends ComponentProps<"div"> {
  src: string | StaticImport;
  alt: string;
  imageClassname?: string;
  useGradient?: boolean;
}

const parallaxStrength = 50;

export function ArticleImageParallax({
  children,
  src,
  alt,
  imageClassname,
  useGradient = true,
}: ArticleImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const subjectRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        subjectRef.current,
        { translateY: parallaxStrength * -1 },
        {
          translateY: parallaxStrength,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    },
    { dependencies: [children], scope: containerRef },
  );

  return (
    <div className={cn("flex flex-col gap-5")}>
      <div ref={containerRef} className={cn("relative overflow-hidden", imageClassname)}>
        <div
          ref={subjectRef}
          className={cn("absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2", {
            "bg-gradient-to-tr from-[#F57255] to-[#FFA339]": useGradient,
          })}
        >
          <Image src={src} alt={alt} className="h-full min-h-full w-full min-w-full" />
        </div>
      </div>
      <span className="font-bold text-light-100/50">{children}</span>
    </div>
  );
}
