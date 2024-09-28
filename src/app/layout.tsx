import LandingCanvas3D from "@/ui/components/3d/landing-canvas";
import ScrollSkew from "@/ui/components/interaction/scroll-skew";
import { Providers } from "@/ui/providers/providers";
import Footer from "@/ui/sections/footer";
import NavBar from "@/ui/sections/navbar";
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
      <Providers>
        <body>
          <NavBar className="fixed" />
          <main className="relative">
            <LandingCanvas3D className="fixed -z-50 h-screen w-screen" />
            <ScrollSkew>
              {children}
              <Footer />
            </ScrollSkew>
          </main>
        </body>
      </Providers>
    </html>
  );
}
