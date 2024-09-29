import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface Heading3Props extends ComponentProps<"h3"> {}

export function Heading3({ children, className, ...props }: Heading3Props) {
  return (
    <h3 className={cn("mb-10 text-2xl font-bold md:text-3xl xl:text-4xl", className)} {...props}>
      {children}
    </h3>
  );
}
