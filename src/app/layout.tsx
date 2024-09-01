import type { Metadata } from "next";
import { ReactNode } from "react";
import "./index.css";

export const metadata: Metadata = {
  title: "Ian Chong - Fullstack Developer",
  description: "Portfolio",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
