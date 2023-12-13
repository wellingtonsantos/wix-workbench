/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        // GENERAL
        'D10': '#000624',
        'D20': '#333853',
        'D30': '#595D70',
        'D40': '#868AA5',
        'D50': '#ACAFC4',
        'D55': '#CFD1DC',
        'D60': '#DFE5EB',
        'D70': '#ECEFF3',
        'D75': '#F7F8F8',
        'D80': '#FFFFFF',
        // PRIMARY
        'B00': '#084EBD',
        'B05': '#0F62E6',
        'B10': '#116DFF',
        'B20': '#5999FF',
        'B30': '#A8CAFF',
        'B40': '#D6E6FE',
        'B50': '#E7F0FF',
        'B60': '#F4F7FF',
      }
    },
  },
  plugins: [],
}

