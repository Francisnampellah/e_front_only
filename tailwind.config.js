/** @type {import('tailwindcss').Config} */
module.exports = {
  //important: true,
  content: ["./src/**/*.{html,js,jsx}"],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: ["emerald", "dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
