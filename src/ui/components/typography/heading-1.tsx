import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface Heading1Props extends ComponentProps<"h1"> {
  noGradient?: boolean;
}

export function Heading1({ children, noGradient, className, ...props }: Heading1Props) {
  return (
    <h1
      className={cn(
        "text-5xl font-bold leading-tight tracking-tight xl:text-6xl xl:leading-tight",
        { "text-gradient": !noGradient },
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
