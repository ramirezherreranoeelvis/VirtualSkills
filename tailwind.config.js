/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      
      boxShadow: {
        'panel': '0 0 20px 0 #00000020'
      },
      fontFamily: {
        arcade: ['Arcade Gamer', 'sans-serif'],
        bree: ['Bree Serif', 'sans-serif'],
        abel: ['Abel Regular', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
        fredoka: ['"Fredoka"', 'sans-serif'],
        bubblegum: ['"Bubblegum Sans"', 'sans-serif'],
        lexend:['lexend', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

