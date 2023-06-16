/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: {
        DEFAULT: "#1b2c5d",
        l1: "#2a4387",
        l2: "#5292da",
        l3: "#90c4ee",
      },
      white: {
        DEFAULT: "rgba(255, 255, 255, 1)",
        t75: "rgba(255, 255, 255, 0.75)",
        t50: "rgba(255, 255, 255, 0.5)",
        t25: "rgba(255, 255, 255, 0.25)",
        t10: "rgba(255, 255, 255, 0.1)",
        t05: "rgba(255, 255, 255, 0.05)",
      },
      dark: {
        DEFAULT: "rgba(0, 0, 0, 1)",
        t75: "rgba(0, 0, 0, 0.75)",
        t50: "rgba(0, 0, 0, 0.5)",
        t25: "rgba(0, 0, 0, 0.25)",
        t10: "rgba(0, 0, 0, 0.1)",
        t05: "rgba(0, 0, 0, 0.05)",
      },
      black: {
        DEFAULT: "rgba(62, 50, 50, 1)",
        t75: "rgba(62, 50, 50, 0.75)",
        t50: "rgba(62, 50, 50, 0.5)",
        t25: "rgba(62, 50, 50, 0.25)",
        t10: "rgba(62, 50, 50, 0.1)",
        t05: "rgba(62, 50, 50, 0.05)",
      },
      stroke: "background: rgba(230, 230, 230, 1)",
      gray: "rgba(245, 245, 245, 1)",
    },
    boxShadow: {
      DEFAULT: "0px 0px 32px 0px rgba(0, 0, 0, 0.07);",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
