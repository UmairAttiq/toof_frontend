/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          500: '#697077',
          450: '#C1C7CD',
          350: '#DDE1E6',
          300: '#F2F4F8',
        },
        slate: {
          750: '#3A2F4C'
        },
        blue: {
          600: '#1063FE',
          900: '#211664'
        }
        
      }
    },
  },
  plugins: [],
}