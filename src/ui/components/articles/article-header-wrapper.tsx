import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

export default function ArticleHeaderWrapper({
  children,
  className,
  ...rest
}: ComponentProps<"div">) {
  return (
    <div className={cn("mb-10 flex w-5/6 flex-col gap-10 sm:w-1/2", className)} {...rest}>
      {children}
    </div>
  );
}
