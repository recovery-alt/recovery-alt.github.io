import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['.vitepress/theme/**/*.{vue,tsx}', '{about,assets,blog,contact}/**/*.md', 'index.md'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 200ms ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [typography()],
};
