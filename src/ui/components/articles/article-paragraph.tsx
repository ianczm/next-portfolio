import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

export function ArticleParagraph({ children, className, ...rest }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "mb-6 text-pretty text-base font-bold leading-relaxed text-light-100/75 last:mb-0 sm:text-lg sm:leading-normal xl:mb-10 xl:text-xl",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
