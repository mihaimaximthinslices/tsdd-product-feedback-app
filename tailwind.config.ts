import type { Config } from 'tailwindcss'
const { blackA, violet, mauve } = require('@radix-ui/colors')

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...blackA,
        'color-background': 'var(--color-background)',
        'color-overlay': 'var(--color-overlay)',
        'color-panel-solid': 'var(--color-panel-solid)',
        'color-panel-translucent': 'var(--color-panel-translucent)',
        'color-surface': 'var(--color-surface)',
        'color-transparent': 'var(--color-transparent)',
      },
    },
  },
  plugins: [],
}
export default config
