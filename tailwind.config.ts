import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'dark': '#252525',
      'black': '#000000',
      'teal-blue': 'rgb(0, 97, 241)',
      'coral-red': 'rgb(255, 97, 97)',
      'mint-green': 'rgb(97, 241, 97)',
      'lavender': 'rgb(158, 97, 255)',
    },
    extend: {
      fontFamily: {
        "robotoslab": "var(--font-roboto-slab)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        "roboto": "var(--font-roboto)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
        "sans": "var(--font-roboto)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
