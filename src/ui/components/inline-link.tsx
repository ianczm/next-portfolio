import Link from "next/link";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils/tailwind";

interface InlineLinkProps extends ComponentProps<"a"> {
  underline?: boolean;
  isExternal?: boolean;
}

const InlineLink = forwardRef<HTMLAnchorElement, InlineLinkProps>((props, ref) => {
  const { className, underline, children, target, href, isExternal, ...rest } = props;
  return (
    <Link
      ref={ref}
      className={cn("font-bold transition-colors hover:text-primary-400", className, {
        underline,
      })}
      target={isExternal ? "_blank" : target}
      href={href ?? "/"}
      {...rest}
    >
      {children}
    </Link>
  );
});

InlineLink.displayName = "InlineLink";

export default InlineLink;
