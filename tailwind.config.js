/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        card: '#e2e2e2',
      },
      screens: {
        xs: '480px',
      },
      keyframes: {
        fadenin: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadenin: 'fadenin 300ms ease-out forwards',
      },
    },
  },
  plugins: [],
}

