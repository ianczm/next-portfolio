import { ArrowRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "../utils/tailwind";
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
      <Image src={src} alt={title} className="aspect-[0.8] w-full object-cover" />
      <div className="absolute bottom-0 flex items-end gap-20 p-16">
        <div>
          <h3 className="mb-5 text-4xl font-bold">{title}</h3>
          <Paragraph2 className="text-balance">{children}</Paragraph2>
        </div>
        <ArrowRight className="flex-shrink-0" size={48} strokeWidth={1.5} />
      </div>
    </Link>
  );
}
