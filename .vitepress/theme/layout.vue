<template>
  <Layout>
    <template #nav-bar-title-before>
      <svg
        class="absolute -left-6 -top-2 z-0 transform rotate-45 opacity-20"
        viewBox="0 0 200 200"
        width="80"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#059669"
          d="M50.4,-15.8C59.3,10.9,56.2,42.1,36,58.9C15.9,75.8,-21.4,78.3,-41.8,62.4C-62.2,46.4,-65.8,11.9,-56,-16C-46.2,-43.9,-23.1,-65.4,-1.2,-65C20.8,-64.6,41.5,-42.4,50.4,-15.8Z"
          transform="translate(100 100)"
        />
      </svg>
    </template>
    <template #doc-bottom>
      <footer class="px-5 sm:px-7 md:px-10 text-center text-gray-400 text-sm my-5">
        <div class="text-center mb-5">
          <icons />
        </div>
        <p class="mb-3">© 2023 Recovery, All rights reserved.</p>
      </footer>
    </template>
  </Layout>
  <BackToTop />
</template>

<script lang="ts" setup>
import { inject, watch } from 'vue';
import { useData } from 'vitepress';
import icons from './components/icons.vue';
import BackToTop from './components/back-to-top.vue';
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;

const zoom = inject<any>('zoom');
const { page } = useData();

watch(
  page,
  () => {
    if (zoom) {
      setTimeout(() => {
        zoom.listen('.prose img:not(.zoom-exclude)');
      }, 500);
    }
    if (typeof document !== 'undefined') {
      // @todo fix vitepress seo
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', page.value.frontmatter.description);
    }
  },
  { immediate: true }
);
</script>
