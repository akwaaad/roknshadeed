/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#1c3557",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  darkMode: ["selector", '[data-theme="dark"]'],
};
