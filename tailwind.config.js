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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'color-background': 'var(--color-background)',
        'color-overlay': 'var(--color-overlay)',
        'color-panel-solid': 'var(--color-panel-solid)',
        'color-panel-translucent': 'var(--color-panel-translucent)',
        'color-surface': 'var(--color-surface)',
        'color-transparent': 'var(--color-transparent)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}