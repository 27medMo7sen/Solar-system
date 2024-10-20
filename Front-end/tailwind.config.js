/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        searchWidth: {
          "0%": { width: "0" },
          "100%": { width: "384px" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
        slideLeft: "slideLeft 0.5s ease-in-out",
        searchWidth: "searchWidth 0.7s ease-in-out",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        n: "2px rgba(0, 0, 0, 1)",
      },
    },
    screens: {
      xs: { max: "320px" },
      sm: { max: "450px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
    },
  },
  plugins: [],
};
