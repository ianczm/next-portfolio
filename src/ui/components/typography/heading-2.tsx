import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface Heading2Props extends ComponentProps<"h2"> {}

export function Heading2({ children, className, ...props }: Heading2Props) {
  return (
    <h2 className={cn("text-gradient font-bold uppercase tracking-widest", className)} {...props}>
      <span className="text-transparent">{children}</span>
    </h2>
  );
}
