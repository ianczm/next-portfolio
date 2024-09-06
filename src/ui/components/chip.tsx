import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
}

export function Chip({ children }: Readonly<ChipProps>) {
  return (
    <div className="rounded-full bg-primary-400/20 px-6 py-4 text-base font-bold leading-none text-primary-400">
      {children}
    </div>
  );
}
