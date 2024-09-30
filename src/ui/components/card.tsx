import { ArrowRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "../utils/tailwind";
import { Heading3 } from "./typography";
import { Paragraph2 } from "./typography/paragraph";

interface CardProps {
  src: string | StaticImport;
  title: string;
  children: ReactNode;
  className: string;
  href?: string;
}

export function Card({ src, title, children, className, href }: Readonly<CardProps>) {
  return (
    <Link className={cn("relative", className)} href={href ?? "/"}>
      <Image
        src={src}
        alt={title}
        className="aspect-[2/3] w-full object-cover object-[50%_55%] sm:aspect-[1.65] sm:min-h-[600px] lg:aspect-[0.8] lg:object-center"
      />
      <div className="absolute bottom-0 flex h-full w-full items-end justify-between gap-6 bg-dark-800/0 p-8 transition-colors hover:bg-dark-800/20 sm:gap-8 sm:p-12 xl:gap-10 xl:p-16">
        <div className="max-w-[400px]">
          <Heading3 className="mb-5">{title}</Heading3>
          <Paragraph2 className="text-balance">{children}</Paragraph2>
        </div>
        <ArrowRight className="flex-shrink-0" size={36} strokeWidth={1.5} />
      </div>
    </Link>
  );
}
