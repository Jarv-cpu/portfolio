/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flotar: {
          '0%': { top: '0px' },
          '50%': { top: '5px' },
          '100%': { top: '0px' },
        },
        typing: {
          from: { width: '0' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        flotar: 'flotar 2s infinite',
        typing: 'typing 2s steps(22, end)',
        blink: 'blink 1s step-end infinite',
        typingBlink: 'blink .9s infinite,typing 2s steps(22)'
      },
    },
  },
  plugins: [],
}


