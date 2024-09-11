"use client";

import * as fiber from "@react-three/fiber";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

const meshOptions = {
  uSpeed: 0.1,
  uStrength: 0.3,
  uDensity: 3,
};

const colorOptions = {
  color1: "#0D0D0D",
  color2: "#3d1c00",
  color3: "#fab97f",
};

const cameraPosition = {
  cAzimuthAngle: 180,
  cPolarAngle: 120,
  cDistance: 4,
};

const objectPosition = {
  rotationX: 20,
  rotationY: 3,
  rotationZ: 40,
};

interface LandingCanvas3DProps {
  className?: string;
}

export default function LandingCanvas3D({ className }: LandingCanvas3DProps) {
  return (
    <div className={className}>
      <ShaderGradientCanvas importedFiber={{ ...fiber }} pixelDensity={1.4} fov={20}>
        <ShaderGradient
          {...meshOptions}
          {...colorOptions}
          {...cameraPosition}
          {...objectPosition}
          brightness={1.2}
          grain="on"
          grainBlending={0.25}
          type="waterPlane"
          range="disabled"
          enableTransition={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
