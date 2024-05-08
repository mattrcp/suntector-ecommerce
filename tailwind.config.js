/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      header: ["kanit", "san-serif"],
      body: ["montserrat", "san-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      root: "#4D2549",
      header: "#94548E",
      white: "#FFFFFF",
      "primary-900": "#4D2549",
      "primary-800": "#703D6B",
      "primary-700": "#94548E",
      "primary-600": "#B76CB0",
      "primary-500": "#DA84D2",
      "primary-400": "#E19DDB",
      "primary-300": "#E9B5E4",
      "primary-200": "#F0CEED",
      "primary-100": "#F8E6F6",
      "primary-50": "#FBF3FA",
      "secondary-900": "#4C2825",
      "secondary-800": "#6F413D",
      "secondary-700": "#935A54",
      "secondary-600": "#B6736C",
      "secondary-500": "#D98C84",
      "secondary-400": "#E1A39D",
      "secondary-300": "#E8BAB5",
      "secondary-200": "#F0D1CE",
      "secondary-100": "#F7E8E6",
      "secondary-50": "#FBF3F3",
      "tertiary-900": "#4C2530",
      "tertiary-800": "#6F3D4C",
      "tertiary-700": "#935467",
      "tertiary-600": "#B66C83",
      "tertiary-500": "#D9849E",
      "tertiary-400": "#E19DB1",
      "tertiary-300": "#E8B5C5",
      "tertiary-200": "#F0CED8",
      "tertiary-100": "#F7E6EC",
      "tertiary-50": "#FBF3F5",
      "natural-900": "#18181B",
      "natural-800": "#303036",
      "natural-700": "#474950",
      "natural-600": "#5F616B",
      "natural-500": "#777986",
      "natural-400": "#92949E",
      "natural-300": "#ADAFB6",
      "natural-200": "#C9C9CF",
      "natural-100": "#E4E4E7",
      "natural-50": "#F1F2F3",
    },
    fontSize: {
      "display-1": [
        "3rem",
        {
          lineHeight: "3rem",
          fontWeight: "700",
        },
      ],
      "display-2": [
        "2.5rem",
        {
          lineHeight: "3rem",
          fontWeight: "700",
        },
      ],
      "display-3": [
        "2rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "700",
        },
      ],
      "display-4": [
        "1.5rem",
        {
          lineHeight: "1.8rem",
          fontWeight: "700",
        },
      ],
      "display-5": [
        "1.25rem",
        {
          lineHeight: "1.8rem",
          fontWeight: "600",
        },
      ],
      "body-base-lg": [
        "1.125rem",
        {
          lineHeight: "1.625rem",
        },
      ],
      "body-base-md": [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      "body-base-sm": [
        "0.875rem",
        {
          lineHeight: "1.375rem",
        },
      ],
      "body-base-xs": [
        "0.75rem",
        {
          lineHeight: "1.25rem",
        },
      ],
    },
    fontWeight: {
      light: "200",
      normal: "400",
      semi: "600",
      bold: "700",
    },
    backgroundImage: {
      "hero-about": "url('./assets/homePage/hero-sunglass2.jpeg')",
    },
    plugins: [],
  },
};
