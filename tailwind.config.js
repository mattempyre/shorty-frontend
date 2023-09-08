import { forms, typography } from '@tailwindcss/aspect-ratio';

export default {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [forms(), typography()],
};
