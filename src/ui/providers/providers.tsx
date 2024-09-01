import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: Readonly<ProvidersProps>) {
  return <>{children}</>;
}
