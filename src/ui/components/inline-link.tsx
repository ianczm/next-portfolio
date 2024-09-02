import { ComponentProps } from "react";
import { cn } from "../utils/tailwind";

interface InlineLinkProps extends ComponentProps<"a"> {
  underline?: boolean;
}

export default function InlineLink({
  underline,
  children,
  ...props
}: Readonly<InlineLinkProps>) {
  return (
    <a className={cn("font-bold", { underline })} {...props}>
      {children}
    </a>
  );
}
