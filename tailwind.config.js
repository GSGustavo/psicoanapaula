/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      },
    },
    screens: {
      sm: '650px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#FFEFF7',
        secondary: '#808080',
        rose: {
          DEFAULT: '#9B254A',
          secondary: '#27011D',
          terciary: '#08AAB0'
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins'
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)'
      },
      backgroundImage: {
        services: 'url(../../assets/img/services/bg.svg)',
        testimonials: 'url(../../assets/img/testimonials/bg.svg)',
        departments: 'url(../../assets/img/departments/bg.svg)',
        quoteLeft: 'url(../../assets/icons/testimonials/quote-left.svg)',
        quoteRight: 'url(../../assets/icons/testimonials/quote-right.svg)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

