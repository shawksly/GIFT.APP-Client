/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'auth': '--auth-height',
      }
    },
  },
  plugins: [],
}

