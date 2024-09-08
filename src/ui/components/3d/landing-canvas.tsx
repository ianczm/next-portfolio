"use client";

import * as fiber from "@react-three/fiber";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

const meshOptions = {
  uSpeed: 0.1,
  uStrength: 0.4,
  uDensity: 3.3,
};

const colorOptions = {
  color1: "#fab97f",
  color2: "#3d1c00",
  color3: "#0D0D0D",
};

const cameraPosition = {
  cAzimuthAngle: 180,
  cPolarAngle: 120,
  cDistance: 4,
};

const objectPosition = {
  positionX: -0.9,
  positionY: -0.3,
  positionZ: 0,
  rotationX: 20,
  rotationY: -10,
  rotationZ: 20,
};

export default function LandingCanvas3D() {
  return (
    <ShaderGradientCanvas importedFiber={{ ...fiber }} pixelDensity={1.4} fov={15}>
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
  );
}
