import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface QuoteProps extends ComponentProps<"p"> {}

export function Quote({ children, className, ...props }: QuoteProps) {
  return (
    <p
      className={cn(
        "text-balance text-lg font-bold leading-relaxed sm:text-2xl xl:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
