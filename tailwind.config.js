/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors
      colors: {
        bgPrimary: "#FFF9EF",
        bgSecondary: "#FFEFE3",
        orangePrimary: "#FF682C",
        heading: "#2A2848",
        paragraph: "#27244499",
        greenPrimary: "#41B4AE",
      },
      // font family
      fontFamily: {
        poppins: "var(--font-poppins)",
        merriweather: "var(--font-merriweather)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4.5rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
