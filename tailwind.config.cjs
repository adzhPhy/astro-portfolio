const { colors } = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xxs: "320px",
      md: "768px",
    },
    extend: {},
    colors: {
      ...colors,
      "th-background": "var(--background)",
      "th-primary": "var(--primary)",
      "th-secondary": "var(--secondary)",
      "th-tertiary": "var(--tertiary)",
    },
  },
  plugins: [],
};
