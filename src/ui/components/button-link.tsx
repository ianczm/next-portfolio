import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "../utils/tailwind";
import { buttonStyles } from "./button";

interface ButtonLinkProps extends ComponentProps<"a">, VariantProps<typeof buttonStyles> {}

export default function ButtonLink({
  href,
  intent,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href ?? "/"}
      {...props}
      className={cn(buttonStyles({ intent }), "flex items-center justify-center", className)}
    >
      <div className="font-bold">{children}</div>
    </Link>
  );
}
