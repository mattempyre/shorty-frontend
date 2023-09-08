/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [typography, forms],
};
