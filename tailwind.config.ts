import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
      },
      colors: {
        primaryGreen: "#66C18C",
        primaryGreenBg: "rgba(102, 193, 140, 0.4)",
        primaryBlue: "#25356f",
        primaryBlueBg: "rgba(52, 152, 219, 0.1)",
        primaryGray: "#BFC9CA",
      },
      boxShadow: {
        xl: "4px 4px 10px 2px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
