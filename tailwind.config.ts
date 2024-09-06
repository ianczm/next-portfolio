import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          400: "rgb(var(--color-dark-400))",
          800: "rgb(var(--color-dark-800))",
        },
        light: {
          100: "rgb(var(--color-light-100))",
        },
        primary: {
          400: "rgb(var(--color-primary-400))",
          600: "rgb(var(--color-primary-600))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
