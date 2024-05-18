/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xxs: '280px', // galaxy fold
        xs: '320px', // s9+, iphone 4,5, old SE
        sm: '400px', // iphone xr, iphone 14 max, pixel 7, galalcy a 51, surface duo
        tabletsm: '600px', // ipad mini, ipad pro, ipad air, surface pro 7
        md: '768px', // ipad mini, ipad air, surface pro 7
        desktopxs: '1024px', // ipad pro, Schermi da 13-14 pollici
        desktopsm: '1280px', // Vecchio XL Schermi da 15-16 pollici
        desktopmd: '1400px', // Vecchio XL Schermi da 17-18 pollici
        desktoplg: '1600px', // Vecchio XXL Schermi da 19-21 pollici
        desktopxl: '1920px', // Schermi da 22 pollici in su
        desktop2xl: '2050px', // Schermi ultrawide da 27 pollici in su
        desktop3xl: '2300px', // Schermi ultrawide da 32 pollici in su
        desktop4xl: '3840px', // Schermi ultrawide da 40 pollici in su
      },
    },
  },
  plugins: [],
};
