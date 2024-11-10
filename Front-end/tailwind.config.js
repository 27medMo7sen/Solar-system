/** @type {import('tailwindcss').Config} */
import { BiBorderAll } from "react-icons/bi";
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
        sections: "1200px",
      },
      height: {
        "main-card": "650px", // You can adjust this to fit your product card size
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        slideCardDown: {
          "0%": {
            transform: "translateY(-100%) translateX(-50%)",
            opacity: 0,
          },
          "75%": {
            transform: "translateY(0) translateX(-50%)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(-50) translateX(-50%)",
            opacity: 1,
          },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
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
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        slideCardDown: "slideCardDown 0.5s ease-in-out",
        slideDown: "slideDown 0.5s ease-in-out",
        slideLeft: "slideLeft 0.8s ease-in-out",
        searchWidth: "searchWidth 0.7s ease-in-out",
        searchWidthSm: "searchWidthSm 0.7s ease-in-out",
        slideRight: "slideRight 0.8s ease-in-out",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        n: "2px rgba(0, 0, 0, 1)",
        "auth-form-shadow": "-10px 10px 10px  rgba(249, 129 ,6,0.8)",
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
