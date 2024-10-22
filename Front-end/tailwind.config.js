/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "80%": "80%",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-100%) translateX(-50%) translateY(-50%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0) translateX(-50%) translateY(-50%)",
            opacity: 1,
          },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0) ", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0) ", opacity: 1 },
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
    },
    screens: {
      //max-width
      "mx-xs": { max: "320px" },
      "mx-sm": { max: "450px" },
      "mx-md": { max: "768px" },
      "mx-lg": { max: "1024px" },
      "mx-xl": { max: "1280px" },
      //min-width
      "mn-xs": { min: "320px" },
      "mn-sm": { min: "450px" },
      "mn-md": { min: "768px" },
      "mn-lg": { min: "1024px" },
      "mn-xl": { min: "1280px" },
      //ranges
      "range-xs": { min: "320px", max: "450px" },
      "range-sm": { min: "451px", max: "768px" },
      "range-md": { min: "769px", max: "1024px" },
      "range-lg": { min: "1025px", max: "1280px" },
      "range-xl": { min: "1281px", max: "1536px" },
    },
  },
  plugins: [],
};
