import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
  ["rounded-full", "border-2", "px-9", "py-6", "transition-all"],
  {
    variants: {
      intent: {
        primary: [
          "border-transparent",
          "bg-primary-400/20 hover:bg-primary-400",
          "text-primary-400 hover:text-dark-800",
          "shadow-2xl shadow-primary-400/10 hover:shadow-primary-400/60",
        ],
        secondary: [
          "border-primary-400/25 hover:border-primary-400",
          "shadow-2xl shadow-primary-400/10 hover:shadow-primary-400/20",
          "bg-transparent hover:bg-primary-400/10",
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
