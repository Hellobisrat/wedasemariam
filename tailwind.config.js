/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        customBlue: '#1fb6ff',
        customPurple: '#7e5bef',
        customPink: '#ff49db',
        customOrange: '#ff7849',
        customGreen: '#13ce66',
        customYellow: '#ffc82c',
        customGrayDark: '#273444',
        customGray: '#8492a6',
        customGrayLight: '#d3dce6',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
