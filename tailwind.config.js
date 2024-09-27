const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'min': '0px', 'max': '641px' },
      'sm': { 'min': '640px', 'max': '767px' },


      'md': { 'min': '768px', 'max': '1023px' },


      'lg': { 'min': '1024px', 'max': '1279px' },


      'xl': { 'min': '1280px', 'max': '1535px' },


      '2xl': { 'min': '1536px' },

    },
    extend: {
      colors: {
        primary: "rgb(10, 126, 164)",
        secondary: "rgb(204, 218, 78)",
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui(


    )],
};
