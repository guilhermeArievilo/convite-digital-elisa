import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      primary: '#F189BA',
      secondary: '#F4C047',
      background: '#F9FAFC'
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [],
}
export default config
