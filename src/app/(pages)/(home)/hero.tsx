import HeroGurulab from "@/assets/images/hero-gurulab.png";
import { Heading1 } from "@/ui/components/typography";
import Image from "next/image";

export function HeroBanner() {
  return (
    <div className="relative">
      <Image src={HeroGurulab} alt="Gurulab" className="h-auto w-full" />
      <div className="absolute bottom-0 p-60">
        <div className="flex max-w-[700px] flex-col gap-10">
          <Heading1 noGradient>
            Crafting an experience means the careful blend of feel and function.
          </Heading1>
        </div>
      </div>
    </div>
  );
}
