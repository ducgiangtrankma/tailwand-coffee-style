module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "xs":"480px"
      },
      fontFamily:{
        Karla:['Karla','sans-serif']
      },
      colors:{
       "light-coffee":"#C89f94",
       "coffee":{
         50:'#e8d6d0',
         200:'#C89f94',
         400:'#A25f4b',
         600:'#744838',
       }

      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0))' },
        },
        fadeIn:{
          from:{  opacity:  0},
          to:{  opacity:  1}
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out'
      },
      backgroundImage:{
        'slider-bg': 'url("./img/slide-bg.jpeg")'
      }
    },
  },
  plugins: [],
}
