import HeroGurulab from "@/assets/images/hero-gurulab.png";
import { Heading1 } from "@/ui/components/typography";
import { cn } from "@/ui/utils/tailwind";
import Image from "next/image";
import { ComponentProps } from "react";

export function HeroBanner({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src={HeroGurulab}
        alt="Gurulab"
        className="h-auto min-h-[475px] w-full object-cover object-[25%_50%] sm:min-h-[500px] sm:object-[15%_50%] md:min-h-[750px] md:object-[20%_20%]"
      />
      <div className="absolute bottom-20 left-0 w-full">
        <div className="mx-auto max-w-screen-2xl p-6 sm:p-8 md:p-20">
          <Heading1 noGradient>
            Crafting an experience <br /> means the careful blend <br /> of feel and function
          </Heading1>
        </div>
      </div>
    </div>
  );
}
