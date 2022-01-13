<template>
  <div class="theme">
    <div class="bg-gray-50 px-5 sm:px-7 md:px-10">
      <div class="prose md:prose-xl prose-green mx-auto">
        <header class="navbar mb-10 sm:mb-16 md:mb-20">
          <NavBar />
        </header>
        <main class="pb-10 sm:pb-16 md:pb-20">
          <template v-if="post">
            <h1>{{ post.title }}</h1>
            <div class="text-sm text-gray-500">
              <time class="mr-3">{{ post.date }}</time> 🕒 {{ post.readMins }}min
            </div>
            <PostTags :post="post" class="mt-5" />
          </template>
          <Content class="content animate-fadeIn" />
        </main>
      </div>
    </div>
    <footer class="px-5 sm:px-7 md:px-10 text-center text-gray-400 text-sm my-5">
      <div class="text-center mb-5">
        <icons />
      </div>
      <p class="mb-3">© 2021 Recovery, All rights reserved.</p>
    </footer>
    <BackToTop />
    <Debug v-if="showDebug" />
    <Menu v-if="!isIndexPage" />
  </div>
</template>

<script lang="ts" setup>
import NavBar from './components/nav-bar.vue';
import PostTags from './components/post-tags.vue';
import { inject, computed, watch } from 'vue';
import { postForPath } from './utils';
import { useRoute, useData, Content, Debug } from 'vitepress';
import icons from './components/icons.vue';
import BackToTop from './components/back-to-top.vue';
import Menu from './components/menu.vue';

const zoom = inject<any>('zoom');
const route = useRoute();
const post = computed(() => postForPath(route.path));
const { page } = useData();

const showDebug = computed(() => import.meta.env.DEV);
const isIndexPage = computed(() =>
  ['index.md', 'contact/index.md', 'about/index.md'].includes(page.value.relativePath)
);

watch(
  page,
  () => {
    if (zoom && isIndexPage.value) {
      setTimeout(() => {
        zoom.listen('.prose img:not(.--exclude)');
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
