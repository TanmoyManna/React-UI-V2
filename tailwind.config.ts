/* @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
// import { colortheme } from "@/json/tailwind/color_theme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "25px",
      screens: {
        "2xl": "1312px",
      },
    },
    fontSize: {
      xs: "0.625vw",
      sm: "0.729vw",
      base: "0.833vw",
      lg: "0.938vw",
      xl: "1.389vw",
      "2xl": "1.667vw",
      "3xl": "2.083vw",
      "4xl": "2.5vw",
      "5xl": "3.333vw",
      "6xl": "4.444vw",
    },
    textShadow: {
      xs: "0 2px 0 rgba(174, 207, 242, 0.24)",

    },
    screens: {
      "3xl": { min: "1920px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      md: { max: "767px" },
      sm: { max: "479px" },
      xs: { max: "374px" },
    },
    extend: {
      fontFamily: {
        violetsans: ["violet_sansregular", "sans-serif"],
        dmmono: ["DM Mono", "monospace"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        body_bg: "var(--background)",
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "var(--foreground)",
        text_primary: '#007AFF',
        text_secondary: 'var(--secondarytext)',
        colorD8ECF8: "var(--colorD8ECF8)",
        color828992: "var(--color828992)",
        color595F68: "var(--color595F68)",
        colorInputBg: "var(--colorInputBg)",
        colorInputColor: "var(--colorInputColor)",
        color343B42: "var(--color343B42)",
        deepBlue: "var(--deepBlue)",
        colorB7D5F3: "var(--colorB7D5F3)",
        primary: {
          DEFAULT: "#1F78FF",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        color0C3066: "#0C3066",
        button_border: 'var(--buttonborder)',
        button_text: 'var(--buttontext)',
        button_hover: 'var(--buttonhover)',
        chatinputbg: 'var(--chatinputbg)',
        popoverborder: 'var(--popoverborder)',

        //bordercolor
        border100: 'var(--border100)',
        purple500: 'var(--purple500)'

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
