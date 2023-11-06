/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        primary_color: "#E1F4FC",
        secondary_color: "#06d6a0",
        text_color_normal: "#0A0A0A",
        text_color_dark: "#EBF1F1",
        bg_Dark: "#121212",
        dark_component: "#34495E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
