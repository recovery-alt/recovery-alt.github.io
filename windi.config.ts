import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  extract: {
    include: ['.vitepress/theme/**/*.{vue,tsx}', '{about,assets,blog,contact}/**/*.md', 'index.md'],
  },
  plugins: [typography()],
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
      fontFamily: {
        sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        header:
          'Dosis, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      // typography(theme) {
      //   const fontFamily = theme('fontFamily')('default', 'header');
      //   const color = 'rgb(55, 70, 60)';

      //   return {
      //     DEFAULT: {
      //       css: {
      //         h1: { color, fontWeight: '600', fontFamily, lineHeight: 1.3 },
      //         h2: { color, fontFamily },
      //         h3: { color, fontFamily },
      //         h4: {
      //           color,
      //           fontWeight: '600',
      //           fontSize: '1.5rem',
      //           lineHeight: '2rem',
      //           fontFamily,
      //           textDecoration: 'underline',
      //         },
      //         a: { textDecoration: 'initial' },
      //         blockquote: { fontWeight: '400' },
      //       },
      //     },
      //     xl: {
      //       css: {
      //         h1: { lineHeight: 1.3 },
      //       },
      //     },
      //   };
      // },
    },
  },
});
