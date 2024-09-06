import { ComponentProps } from "react";
import { GradientText } from "./gradient-text";

interface Heading2Props extends ComponentProps<"h2"> {}

export function Heading2({ children, className, ...props }: Heading2Props) {
  return (
    <GradientText as="h2" className="font-bold uppercase tracking-widest" {...props}>
      {children}
    </GradientText>
  );
}
