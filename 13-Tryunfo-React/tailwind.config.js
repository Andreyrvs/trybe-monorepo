/* eslint-disable max-len */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        32: 'var(--shadow)',
        777: 'var(--shadow-top)',
        up: 'var(--shadow-up)',
      },
      inset: {
        '-349': '-21.813rem',
        '-365': '-22.813rem',
      },
      fontFamily: {
        epi: 'Epilogue',
        verdana: 'Verdana',
      },
      colors: {
        primary: '#023031',
        'secondary-green': 'var(--bg-secondary)',
        primarText: 'var(--bg-primary)',
        secondText: '#3d495c',
        grayPrimary: '#f0f2f5',
        primaryRed: 'var(--bg-red)',
        secondRed: 'var(--bg-red-s)',
      },
      spacing: {
        159: '9.938rem',
        338: '21.125rem',
        358: '22.375rem',
        404: '25.25rem',
        514: '32.125rem',
        534: '33.396rem',
        721: '45.063rem',
        1124: '70.25rem',
        1132: '70.875rem',
        cardGap: '6.4%',
        '94xl': '94.9%',
        card: '94.311%',
      },
      fontSize: {
        '34xl': '1.75rem',
      },
    },
    screens: {
      desktopfront: '1440px',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      animation: ['motion-safe'],
    },
  },
  plugins: [],
};
