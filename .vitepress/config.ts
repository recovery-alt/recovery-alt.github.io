import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Recovery',
  scrollOffset: 70,
  head: [['link', { rel: 'icon', href: '/icon.svg' }]],
  description: "Hey 👋 I'm building Vue projects and would like to share my journey with you.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' },
    ],
    // algolia: {
    //   appId: 'M9DXM4AY1Y',
    //   apiKey: '0fb5a98219c616ace82a6da4a25bb097',
    //   indexName: 'blog',
    // },
  },
});
