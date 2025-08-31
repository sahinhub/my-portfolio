/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];

export const theme = {
  extend: {
    colors: {
       primary: '#F0F0F0',
      secondary: '#000000',
      heading: '#2B6DF1',
     text: '#717171',
     darkText: '#FEFEFE',

    },
  },
};

export const plugins = [
  require('daisyui'),
];