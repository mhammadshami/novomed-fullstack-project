/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-xl": ["24px", { lineHeight: "30px", fontWeight: "700" }],
        "heading-l": ["18px", { lineHeight: "23px", fontWeight: "700" }],
        "heading-m": ["15px", { lineHeight: "19px", fontWeight: "700" }],
        "heading-s": [
          "12px",
          { lineHeight: "15px", fontWeight: "700", letterSpacing: "2.4px" },
        ],
        sm: "15px",
      },
      colors: {
        primary: {
          DEFAULT: "#635FC7",
          hover: "#A8A4FF",
        },
        secondary: "#E4EBFA",
        destructive: {
          DEFAULT: "#EA5555",
          hover: "#FF9898",
        },
        "base-dark": "#000112",
        gray: {
          100: "#F4F7FD",
          200: "#E0E3E8",
          300: "#828FA3",
          400: "#3E3F4E",
          500: "#2B2C37",
          900: "#20212C",
        },
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
