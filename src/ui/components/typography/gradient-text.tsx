import { cn } from "@/ui/utils/tailwind";
import { ComponentProps, ElementType } from "react";

type GradientTextProps<T extends ElementType> = {
  as: T;
} & ComponentProps<T>;

export function GradientText<T extends ElementType>({
  children,
  className,
  as: RenderAs,
  ...props
}: GradientTextProps<T>) {
  return (
    <RenderAs className={cn("text-gradient", className)} {...props}>
      <span className="text-transparent">{children}</span>
    </RenderAs>
  );
}
