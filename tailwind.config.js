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
        'yellow': '#FDCC4B',
      },
  },
  plugins: [],
}
}

