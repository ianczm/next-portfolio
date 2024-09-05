import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
  ["rounded-full", "border-2", "px-9", "py-6", "transition-all"],
  {
    variants: {
      intent: {
        primary: [
          "border-transparent",
          "bg-[#FCBC84]/20 hover:bg-[#FCBC84]",
          "text-[#FCBC84] hover:text-[#0D0D0D]",
          "shadow-2xl shadow-[#FCBC84]/10 hover:shadow-[#FCBC84]/60",
        ],
        secondary: [
          "border-[#FCBC84]/25 hover:border-[#FCBC84]",
          "shadow-2xl shadow-[#FCBC84]/10 hover:shadow-[#FCBC84]/20",
          "bg-transparent hover:bg-[#FCBC84]/10",
        ],
      },
    },
    defaultVariants: {
      intent: "secondary",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {}

export default function Button({
  intent,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={buttonStyles({ intent })}>
      <div className="font-bold">{children}</div>
    </button>
  );
}
