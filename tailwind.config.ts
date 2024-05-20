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
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom, rgba(37, 53, 111, 0.5) 0%, rgba(37, 53, 111, 1) 90%, rgba(37, 53, 111, 1) 100%)",
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
