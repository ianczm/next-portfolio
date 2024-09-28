import { cn } from "@/ui/utils/tailwind";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentProps } from "react";

interface ArticleImageProps extends ComponentProps<"div"> {
  src: string | StaticImport;
  alt: string;
  imageClassname?: string;
  useGradient?: boolean;
}

export function ArticleImage({
  children,
  src,
  alt,
  imageClassname,
  useGradient = true,
}: ArticleImageProps) {
  return (
    <div className={cn("flex flex-col gap-5")}>
      <div className={cn("relative overflow-hidden", imageClassname)}>
        <div
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
