/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{js,jsx,ts}',
    './components/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      colors: {
        'light-navy': '#112240',
        'green': '#64ffda',
        'navy': '#0a192f',
        'slate': '#8892b0',
        'light-slate':'#a8b2d1',
        'lightest-slate':'#ccd6f6',
        'white':'#e6f1ff'
      },
    },
  },
  plugins: [],
}

