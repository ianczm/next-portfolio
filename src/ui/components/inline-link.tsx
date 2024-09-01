import { ComponentProps } from "react";

export default function InlineLink({
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a className="font-bold underline" {...props}>
      {children}
    </a>
  );
}
