/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-blue": "#509EFF",
        "secondary-blue": "#4390D6",
        "gallery-blue": "#7DCBFF8A",
        "gallery-blue-dark": "#7DCBFFD9",
        "circle-blue1": "#70C4FC",
        "circle-blue2": "#509EFF",
        "person-blue": "#3F8AC7B0",
        "shadow-blue": "#B8E3FF",
        "select-blue":"#5DB3FF",

        "input-gray": "#E8E8E8",
        "icons-gray": "#C1C1C1",
        "bg-gray":" #D9D9D9",
        "border-gray": "#ABABAB",

        "main-yellow": "#FDCC4B",
        "building-yellow": "#C0A356",
        "rating-yellow": "#FAB101",

        "darkMode": "#373737",
        "darkMode-product":"#706F6F",
              },
      fontFamily: {
        "pages-title": "Viga",
      },
    },
    plugins: [],
    
  },
};
