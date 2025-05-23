/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import tailwindcssRadix from "tailwindcss-radix";

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        loader: "animationLoader 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        accent: {
          100: "#73A5FF",
          300: "#4C8DFF",
          500: "#397DF6",
          700: "#2F68CC",
          900: "#234E99",
        },
        danger: {
          100: "#FF8099",
          300: "#F23D61",
          500: "#CC1439",
          700: "#990F2B",
          900: "#660A1D",
        },
        dark: {
          100: "#4C4C4C",
          300: "#333333",
          400: "#212121",
          500: "#171717",
          700: "#0D0D0D",
          900: "#000000",
        },
        light: {
          100: "#FFFFFF",
          300: "#F7FBFF",
          500: "#EDF3FA",
          700: "#D5DAE0",
          900: "#8D9094",
        },
        success: {
          100: "#80FFBF",
          300: "#22E584",
          500: "#14CC70",
          700: "#0F9954",
          900: "#0A6638",
        },
        warning: {
          100: "#FFD073",
          300: "#E5AC39",
          500: "#D99000",
          700: "#996600",
          900: "#664400",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      height: {
        headCalc: "calc(100vh - var(--header-height))",
      },
      keyframes: {
        animationLoader: {
          "0%": { left: "0", transform: "translateX(-100%)" },
          "100%": { left: "100%", transform: "translateX(0%)" },
        },
      },
      spacing: {
        scrollbar: "16px",
      },
      screens: {
        'sm-500': '500px',
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["radix-state-active"],
      textColor: ["radix-state-active"],
    },
  },
  plugins: [tailwindcssRadix()],
};
