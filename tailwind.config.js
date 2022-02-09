module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'witcher': "url('/src/img/witcher.jpg')",
        'haunting': "url('/src/img/haunting.jpg')",
        'ratched': "url('/src/img/ratched.jfif')",
        'camino': "url('/src/img/elcamino.jpg')",
        'stranger-things': "url('/src/img/strangerthings.jpg')"
      },
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-heavy': ['Gilroy-Heavy', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
      },
      height: {
        '25': '2.5%',
        '50': '5%',
        '100': '10%',
        '125': '12.5%',
        '150': '15%',
        '170': '17.5%',
        '200': '20%',
        '225': '22.5%',
        '250': '25%',
        '275': '27.5%',
        '300': '30%',
        '325': '32.5%',
        '350': '35%',
        '375': '37.5%',
        '400': '40%',
        '425': '42.5%',
        '450': '45%',
        '475': '47.5%',
        '500': '50%',
        '525': '52.5%',
        '550': '55%',
        '575': '57.5%',
        '700': '70%',
        '800': '80%',
        '900': '90%',
      },
      boxShadow: {
        'all': '0 0 10px #DEDEDE, 0 0 40px #DEDEDE, 0 0 80px #DEDEDE'
      }
    },
  },
  plugins: [],
}

