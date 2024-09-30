import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

export default function ArticleParagraphWrapper({
  children,
  className,
  ...rest
}: ComponentProps<"div">) {
  return (
    <div className={cn("sm:columns-2 sm:gap-8 md:gap-16 xl:gap-32", className)} {...rest}>
      {children}
    </div>
  );
}
