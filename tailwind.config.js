module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontFamily: {
      kaushan:['Kaushan Script'],
      lobster:['Lobster']
   },
   boxShadow:{
     "custom-light":"0 0 15px 5px #313131",
     "custom-dark":"4px 4px 10px #0a0c0e,-5px -5px 10px #14161c"
   },
    extend: {
      boxShadow:{
        textOpacity:["dark"],
      },
      colors: {
       green:{
         DEFAULT:'#00F260'
       },
       dark:{
         DEFAULT:"#010101",
         100:"#0a0b1e",
         200:"#16181d",
         500:"#0f1115",
         600:"#000203",
         700:"#202125",
       }
     },
    },
  },
  plugins: [],
}
