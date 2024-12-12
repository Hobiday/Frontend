import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E50F4",
        secondary: "#B1F9F3",
        error: "#F45050",
        blue: {
          50: "#E5EFFD",
          100: "#CBC7FA",
          200: "#B8B2FA",
          300: "#8C82F7",
          400: "#5E50F4",
          500: "#4739DB",
          600: "#362CA8",
          700: "#2C24A8",
          800: "#241D70",
          900: "#1C1757",
        },
        gray: {
          30: "#EEEDF5",
          50: "#E7E6ED",
          100: "#CECDD4",
          200: "#B5B5BA",
          300: "#9C9CA1",
          400: "#838387",
          500: "#686A6E",
          600: "#525254",
          700: "#39393B",
          800: "#202021",
          900: "#070708",
        },
        kakao: "#FEE500",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      zIndex: {
        header: "20",
        navbar: "10",
        bottomSheet: "30",
        modal: "40",
      },
    },
  },
  plugins: [],
};
export default config;
