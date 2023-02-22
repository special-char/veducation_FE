const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#FF7136",
      primary2: "#FF7034",
      primary3: "#FFE6C3",
      primary4: "#A99376",
      secondary: "#544241",
      background: "#FFEDD7",
      background2: "#1E1E1E",
      notification: "#ED4949",
      error: "#ff9494",
      white: "#FFFFFF",
      neutral: {
        100: "#23262F",
        150: "#878686",
        200: "#808080",
        250: "#F1DEC7",
        300: "#909090",
        350: "#3F3F3F",
        400: "#6C6C6C",
        450: "#22172A",
        500: "#261818",
        550: "#5C5C5C",
        600: "#585858",
        650: "#455441",
        700: "#3A3A3A",
        750: "#4CA137",
        800: "#303030",
        850: "#EDEDED",
        900: "#FF9900",
        950: "#222222",
        1000: "#6E6E6E",
        1050: "#EED9BC",
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
      sans: ["var(--font-SF-Display)", ...fontFamily.sans],
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
