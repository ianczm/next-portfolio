import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
}

export function Chip({ children }: Readonly<ChipProps>) {
  return (
    <div className="w-max rounded-full bg-primary-400/20 px-4 py-3 text-xs font-bold leading-none text-primary-400 sm:px-6 sm:py-4 sm:text-base">
      {children}
    </div>
  );
}
