/** @type {import('tailwindcss').Config} */
import { screens } from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Primary-button": "#F98106",
        "Primary-button-hover": "#F97200",
        "Secondary-button": "#3E555C",
        "Secondary-button-hover": "#4E6565",
        "border-color": "#4E6565",
      },
      maxWidth: {
        "main-card": "800px", // You can adjust this to fit your product card size
      },

      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-100%) translateX(-50%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0) translateX(-50%)",
            opacity: 1,
          },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        searchWidth: {
          "0%": { width: "0" },
          "100%": { width: "384px" },
        },
        searchWidthSm: {
          "0%": { width: "0" },
          "100%": { width: "288px" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
        slideLeft: "slideLeft 0.8s ease-in-out",
        searchWidth: "searchWidth 0.7s ease-in-out",
        searchWidthSm: "searchWidthSm 0.7s ease-in-out",
        slideRight: "slideRight 0.8s ease-in-out",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        n: "2px rgba(0, 0, 0, 1)",
      },
      screens: {
        // Max-width breakpoints
        "mx-xl": { max: "1280px" },
        "mx-lg": { max: "1024px" },
        "mx-md": { max: "768px" },
        "mx-sm": { max: "450px" },
        "mx-xs": { max: "320px" },

        // Min-width breakpoints
        "mn-xl": { min: "1280px" },
        "mn-lg": { min: "1024px" },
        "mn-md": { min: "768px" },
        "mn-sm": { min: "450px" },
        "mn-xs": { min: "320px" },
      },
    },
  },
  plugins: [],
};
