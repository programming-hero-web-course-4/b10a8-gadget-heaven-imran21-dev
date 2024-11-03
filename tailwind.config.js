/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      pColor : '#9538E2',
      white: '#ffff'
    },
    backgroundColor: {
      'pColor' : '#9538E2',
      'sColor': '#09080F',
      'white' : '#ffff'
    }
  },
  plugins: [
    daisyui
  ],
}

