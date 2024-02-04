/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Josefin Slab", 'serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
