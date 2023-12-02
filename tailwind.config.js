/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js', 'node_modules/flowbite-react/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      height: {
        'auth': 'var(--auth-height)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

