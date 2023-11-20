/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        colors: {
          "bg-color-1": "var(--bg-color-1)",
          "bg-color-2": "var(--bg-color-2)",
          "ic-color-1": "var(--ic-color-1)",
          "ic-color-2": "var(--ic-color-2)",
          "ic-color-3": "var(--ic-color-3)",
          "bs-color-1": "var(--bs-color-1)",
          "bs-color-2": "var(--bs-color-2)",
          "bs-color-3": "var(--bs-color-3)",
          "s-color-1": "var(--s-color-1)",
          "s-color-2": "var(--s-color-2)",
          "t-color-1": "var(--t-color-1)",
          "t-color-2": "var(--t-color-2)",
          "t-color-red": "var(--t-color-red)",
        },
      },
      screens: {
        '1xl': '1440px',
        sm: '450px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        heading1: '24px',
        heading2: '20px',
        heading3: '18px',
        heading4: '14px',
        body1: '16px',
        body2: '15px',
        body3: '13px',
      },
      lineHeight: {
        headingXL: '30px',
        headingL: '23px',
        headingM: '19px',
        headingS: '15px',
        bodyL: '23px',
        bodyM: '12px',
      },
      letterSpacing: {
        headingS: '2.4px',
      },
      fontFamily: {
        plusJSans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}