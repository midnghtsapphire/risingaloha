/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070d',
          900: '#0b0f19',
          800: '#121828',
          700: '#1c2338',
          500: '#4a5578',
          300: '#a8b2d1',
          100: '#e6ebff',
        },
        aloha: {
          500: '#ff6b6b',
          400: '#ff8a8a',
          300: '#ffb3b3',
        },
        verdict: {
          false: '#ef4444',
          misleading: '#f59e0b',
          unverified: '#64748b',
          mixed: '#eab308',
          true: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['System'],
      },
    },
  },
  plugins: [],
};
