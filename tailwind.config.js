/**
 * Tailwind CSS Configuration
 *
 * Custom colors and font families as per project design system.
 */
module.exports = {
  content: [
    "./Portfolio-main/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue-light": "#C7DBF7",
        "brand-blue-muted": "#BFC7DE",
        "brand-purple-slate": "#75708C",
        "brand-rose": "#C59594",
        "brand-black": "#010101",
      },
      fontFamily: {
        sans: ["avalon", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};