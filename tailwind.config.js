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
      white: '#ffff',
      black: '#000',
      sColor: '#0404040a',
      tr: '#00000000'

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
  daisyui: {
    // Disable DaisyUI scrollbar styles if they're applied as a component
    styled: true,
    themes: true,
    base: false, // this removes the base styles including scrollbar overrides
  },
}

