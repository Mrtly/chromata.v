module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: 'Ubuntu'
      },
      colors: {
        // palette from /scheme of hsl(190, 55%, 50%)
        cello: 'rgb(30, 86, 98)',
        elm: 'rgb(34, 97, 110)',
        jellyBean: 'rgb(41, 121, 138)',
        bostonBlue: 'rgb(63, 146, 166)',
        moonstone: 'rgb(52, 158, 180)'
      }
    },
  },
  plugins: [],
}
