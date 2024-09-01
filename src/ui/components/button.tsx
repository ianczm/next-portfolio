import { ComponentProps } from "react";
import { cn } from "../utils/tailwind";

export default function Button({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn("rounded-full border-2 px-7 py-4 font-bold", className)}
    >
      <div className="text-gradient text-transparent">{children}</div>
    </button>
  );
}
