"use client";

import { cn } from "@/ui/utils/tailwind";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentProps, useRef } from "react";
import { ArticleParagraph } from "../articles/article-paragraph";

interface ArticleImageProps extends ComponentProps<"div"> {
  src: string | StaticImport;
  alt: string;
  imageClassname?: string;
  useGradient?: boolean;
}

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
        { yPercent: -55, xPercent: -50 },
        {
          yPercent: -45,
          xPercent: -50,
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
          style={{
            top: "50%",
            left: "50%",
          }}
          className={cn("absolute w-full", {
            "bg-gradient-to-tr from-[#F57255] to-[#FFA339]": useGradient,
          })}
        >
          <Image src={src} alt={alt} className="block h-full min-h-full w-full min-w-full" />
        </div>
      </div>
      <ArticleParagraph className="mb-0 font-bold text-light-100/50">{children}</ArticleParagraph>
    </div>
  );
}
