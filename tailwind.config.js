/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Mulish",
      },
      colors: {
        // palette from /scheme of hsl(200, 100%, 40%)
        lochmara: "#037CB8",
        cerulean: "#028ED3",
        dodger: "#03AAFD",
        blueberry: "#47C2FF",
      },
    },
  },
  plugins: [],
};
