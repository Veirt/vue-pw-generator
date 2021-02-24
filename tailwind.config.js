module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "antique-ruby": "#88292F",
        "raisin-black": "#1A1B25",
        "raisin-black2": "#272932",
        "rosso-corsa": "#D01A11",
        "venetian-red": "#BE1E19"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
