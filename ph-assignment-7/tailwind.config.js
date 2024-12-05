/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shadow': "url('../../assets/images/bg-shadow.png')",
      },

    },
  },
  plugins: [require("daisyui")],
}

