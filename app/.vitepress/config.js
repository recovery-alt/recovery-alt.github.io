module.exports = {
  title: 'Recovery',
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
      applicationID: 'JMG2GX9DBP',
      apiKey: '9b72ed3b2cc5b4f8fd8f21f78685f840',
      indexName: 'blog',
      chunkSize: 5000,
    },
  },
};
