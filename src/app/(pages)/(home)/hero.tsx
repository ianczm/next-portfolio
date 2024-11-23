import HeroGurulab from "@/assets/images/hero-gurulab.png";
import { Heading1, Paragraph2 } from "@/ui/components/typography";
import { cn } from "@/ui/utils/tailwind";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

export function HeroBanner({ className, ...props }: ComponentProps<"a">) {
  return (
    <Link className={cn("relative block", className)} {...props} href="/projects/gurulab">
      <Image
        src={HeroGurulab}
        alt="Gurulab"
        className="h-auto min-h-[475px] w-full object-cover object-[25%_50%] sm:min-h-[500px] sm:object-[15%_50%] md:min-h-[750px] md:object-[20%_20%]"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end bg-dark-800/0 transition-colors hover:bg-dark-800/20 2xl:pb-[calc((100vw-1536px)/6)]">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 p-6 sm:p-8 md:p-20">
          <Heading1 noGradient>
            Crafting an experience <br /> means the careful blend <br /> of feel and function
          </Heading1>
          <div className="flex items-center gap-6 xl:gap-10">
            <Paragraph2>View the GuruLab Project</Paragraph2>
            <ArrowRight className="flex-shrink-0" size={32} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </Link>
  );
}
