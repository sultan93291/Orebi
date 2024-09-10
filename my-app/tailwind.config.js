/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "web-max": "1920px",
      },
      colors: {
        offWhite: "#F5F5F3",
        gray: "#6D6D6D",
        white: "#fff",
        black: "#262626",
        lightBlack: "#767676",
        lightWhite: "#F0F0F0",
      },
      fontFamily: {
        "Dm-Sans": '"DM Sans", sans-serif',
      },
      boxShadow: {
        banner_shadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
