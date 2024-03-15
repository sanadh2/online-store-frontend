/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    boxShadow: {
      custom: "0 0px 3px rgba(0, 0, 0, 0.1), 0 0px 3px rgba(0, 0, 0, 0.1)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      Outfit: ["Outfit", "Arial", "sans-serif"],
      Kalam: ["Kalam", "cursive"],
    },
    colors: {
      primary: {
        DEFAULT: "#EACBD2",
        dark: "",
      },
      secondary: {
        DEFAULT: "#8AA8A7",
        dark: "#243B4A",
      },
    },
    screens: {
      xs: "320px",
      sm: "425px",
      md: "600px",
      lg: "720px",
      xl: "1000px",
      "2xl": "1400px",
      "3xl": "1800px",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
