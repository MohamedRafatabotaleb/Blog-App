/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', "sans-serif"], // Add Work Sans as the default sans font
        serif: ['"Source Serif 4"', "serif"], // Add Source Serif Pro for serif text
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "dark-gray-blue": "#3B3C4A",
      "light-gray": "#696A75",
      "high-light-gray": "#F4F4F5",
      "mid-white": "#F6F6F7",

      "soft-gray": "#97989F",
      "custom-gray": "#E8E8EA",
      "bright-blue": "#4B6BFB",
      "midnight-blue": "#181A2A",

      white: "#FFFFFF",
      black: "#000112",
      lines: "#3E3F4E",
      red: "#EA5555",
    },

    fontSize: {
      "heading-header": ["16px", { fontWeight: "400" }],
      "heading-s": ["14px", { fontWeight: "500" }],
      "heading-ss": ["14px", { fontWeight: "400" }],
      "heading-l": ["16px", { fontWeight: "500" }],
      "heading-l-w400": ["16px", { fontWeight: "400" }],
      "body-s": ["20px", { fontWeight: "400" }],
      "body-l": ["24px", { fontWeight: "600" }],
      "body-ls": ["24px", { fontWeight: "400" }],

      "body-xl": ["36px", { fontWeight: "600" }],
    },
    screens: {
      "ov-800": "800px",
      "ov-1200": "1200px",
      lg: "1024px",
    },
  },
  plugins: [],
};
