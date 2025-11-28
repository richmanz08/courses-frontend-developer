/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  safelist: [
    "text-left",
    "text-center",
    "text-right",
    "justify-start",
    "justify-center",
    "justify-end",
  ],
  darkMode: "class",
  content: [
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/component/**/*.{js,ts,jsx,tsx,mdx}", // รวมทุก component
  ],
  plugins: [],
};
