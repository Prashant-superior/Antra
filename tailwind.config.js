/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        bungee: ['"Bungee Outline"', 'sans-serif'],
      },
      colors: {
        't1': '#9bd5ef',
      },
      maxWidth: {
        'sm': '20rem',
        'smm': '35rem',
      }
    },
  },
  plugins: [],
}