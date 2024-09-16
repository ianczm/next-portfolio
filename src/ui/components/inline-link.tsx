import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils/tailwind";

interface InlineLinkProps extends ComponentProps<"a"> {
  underline?: boolean;
}

const InlineLink = forwardRef<HTMLAnchorElement, InlineLinkProps>((props, ref) => {
  const { className, underline, children, target, ...rest } = props;
  return (
    <a
      ref={ref}
      className={cn("font-bold transition-colors hover:text-primary-400", className, {
        underline,
      })}
      target={target ?? "_blank"}
      {...rest}
    >
      {children}
    </a>
  );
});

InlineLink.displayName = "InlineLink";

export default InlineLink;
