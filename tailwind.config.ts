import type { Config } from 'tailwindcss'

const config: Config = {
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
        secondary: '#216A61',
        stroke: '#768592',
        label: '#9E9E9E',
        borderGray: '#D9D9D9',
        fieldGray: '#F2F2F2',
        fieldOrange: '#EF6423',
        primary: '#848181',
      },
      fontFamily: {
        lexendExa: 'var(--font-lexend-exa)',
        jura: 'var(--font-jura)',
        lexendDeca: 'var(--font-lexend-deca)',
      },
      borderRadius: {
        '4xl': '30px',
      },
    },
  },
  plugins: [],
}
export default config
