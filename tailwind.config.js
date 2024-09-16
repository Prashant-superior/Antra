/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        't1': '#9bd5ef',
      },
      maxWidth: {
        'sm': '20rem',
        'smm':'35rem',
      }
    },
  },
  plugins: [],
}