import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface Heading3Props extends ComponentProps<"h3"> {}

export function Heading3({ children, className, ...props }: Heading3Props) {
  return (
    <h3 className={cn("mb-10 text-4xl font-bold", className)} {...props}>
      {children}
    </h3>
  );
}
