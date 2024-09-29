import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface Paragraph2Props extends ComponentProps<"p"> {}

export function Paragraph2({ children, className, ...props }: Paragraph2Props) {
  return (
    <p className={cn("text-xl leading-normal xl:text-2xl", className)} {...props}>
      {children}
    </p>
  );
}

interface Paragraph1Props extends ComponentProps<"p"> {}

export function Paragraph1({ children, className, ...props }: Paragraph1Props) {
  return (
    <p className={cn("text-lg leading-normal xl:text-xl", className)} {...props}>
      {children}
    </p>
  );
}
