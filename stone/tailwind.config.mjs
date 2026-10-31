/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#faf9f7',
          100: '#f4f1ec',
          200: '#e8e2d8',
          300: '#d4c9b6',
          400: '#b8a888',
          500: '#9c8a6b',
          600: '#7e6f54',
          700: '#5f5340',
          800: '#40392b',
          900: '#211d16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
