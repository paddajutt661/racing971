/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        play: { purple: "#531685", gold: "#D8B040", black: "#0F0F12", ink: "#16161A", plum: "#6B2CA4" }
      },
      boxShadow: { glow: "0 0 40px rgba(216,176,64,.25)" }
    },
  },
  plugins: [],
}
