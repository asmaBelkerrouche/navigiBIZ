/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#509EFF',
        'secondary-blue': '#4390D6',
        'circle-blue1':'#70C4FC',
        'circle-blue2':'#509EFF',
        'main-yellow': '#FDCC4B',
        'input-gray': '#E8E8E8',
        'icons-gray': '#C1C1C1',
        'building-yellow': '#C0A356',
        'person-blue':'#3F8AC7B0'
      },
  },
  plugins: [],
}
}

