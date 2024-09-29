import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface QuoteProps extends ComponentProps<"p"> {}

export function Quote({ children, className, ...props }: QuoteProps) {
  return (
    <p
      className={cn("text-balance text-2xl font-bold leading-relaxed xl:text-3xl", className)}
      {...props}
    >
      {children}
    </p>
  );
}
