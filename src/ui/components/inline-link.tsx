import { ComponentProps } from "react";
import { cn } from "../utils/tailwind";

interface InlineLinkProps extends ComponentProps<"a"> {
  underline?: boolean;
}

export default function InlineLink({
  underline,
  children,
  target,
  ...props
}: Readonly<InlineLinkProps>) {
  return (
    <a
      className={cn("font-bold transition-all hover:text-primary-400", {
        underline,
      })}
      target={target ?? "_blank"}
      {...props}
    >
      {children}
    </a>
  );
}
