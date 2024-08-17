/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "16/4": "4 / 3",
      },
    },
  },
  plugins: [require("daisyui")],
};
