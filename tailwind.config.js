/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
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

