import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface QuoteProps extends ComponentProps<"p"> {}

export function Quote({ children, className, ...props }: QuoteProps) {
  return (
    <p className={cn("text-balance text-3xl font-bold leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}
