const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#FF7136",
      primary1: "#FFE6C3",
      bacnground: "#FFEDD7",
      secondary1: "#544241",
      secondary2: "#FCDF69",
      secondary3: "#F99D77",
      secondary4: "#7EB7FB",
      error: "#ff9494",
      neutral: {
        100: "#FFFFFF",
        200: "#F9FAFB",
        300: "#E7EAEE",
        400: "#BECAD7",
        500: "#8096B0",
        600: "#62778F",
        700: "#1E3D60",
        800: "#0F437F",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["var(--font-kumbh)", ...fontFamily.sans],
      serif: ["var(--font-newsreader)", ...fontFamily.serif],
      cursive: ["var(--font-block)", "cursive"],
    },
    fontSize: {
      xs: ["14px", "1.5em"],
      sm: ["15px", "1.6em"],
      base: ["16px", "1.44em"],
      lg: ["18px", "1.667em"],
      xl: ["20px", "1.5em"],
      xxl: ["22px", "1.5em"],
      "2xl": ["24px", "1.583em"],
      "3xl": ["26px", "1.289em"],
      "4xl": ["32px", "1.289em"],
      "5xl": ["36px", "1.3em"],
      "6xl": ["38px", "1.289em"],
      "7xl": ["42px", "1.3em"],
      "8xl": ["52px", "1.3em"],
      "9xl": ["60px", "1.3em"],
    },
    boxShadow: {
      base: "0 5px 15px 0 rgb(30 61 96 / 3%)",
      dark: "0 15px 15px 0.01px rgba(30, 61, 96, 0.03)",
    },
    extend: {
      spacing: {
        container: `max(
          1rem,
          calc((100vw - calc(1280px - 1rem * 2)) / 2)
        )`,
        "sm-container": `max(
          1rem,
          calc((100vw - calc(550px - 1rem * 2)) / 2)
        )`,
      },
      aspectRatio: {
        image: "3 / 4",
        "h-image": "4 / 3",
        "blog-image": "16/9",
      },
      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            "border-color": theme("colors.vercel.pink"),
          },
          "40%": {
            "border-color": theme("colors.vercel.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: 1,
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
