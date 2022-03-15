import { defineConfig } from 'vitepress';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  title: 'Recovery',
  vite: {
    plugins: [WindiCSS()],
  },
  scrollOffset: 40,
  head: [
    ['link', { rel: 'icon', href: '/icon.svg' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Dosis:wght@300;400;500;600;700&display=swap',
      },
    ],
  ],
  description: "Hey 👋 I'm building Vue projects and would like to share my journey with you.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' },
    ],
    algolia: {
      appId: 'M9DXM4AY1Y',
      apiKey: '0fb5a98219c616ace82a6da4a25bb097',
      indexName: 'blog',
    },
  },
});
