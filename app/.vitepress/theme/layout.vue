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
        <a
          v-for="item in icons"
          :key="item.name"
          :href="item.url"
          target="_blank"
          class="unstyled transition-opacity inline-block opacity-70 hover:opacity-100 mr-5"
          :title="`${item.name}: ${item.title}`"
        >
          <component :is="item.name" />
        </a>
      </div>
      <p class="mb-3">© 2021 Recovery, All rights reserved.</p>
    </footer>
    <Debug />
  </div>
</template>

<script lang="ts" setup>
import NavBar from './components/nav-bar.vue';
import PostTags from './components/post-tags.vue';
import { inject, computed, watch } from 'vue';
import { postForPath } from './utils';
import { useRoute, usePageData, Content, Debug } from 'vitepress';

const zoom = inject<any>('zoom');
const route = useRoute();
const post = computed(() => postForPath(route.path));
const page = usePageData();

const icons = [
  { name: 'juejin', title: 'Recovery', url: 'https://juejin.cn/user/1838039174496135' },
  { name: 'github', title: 'Recovery', url: 'https://github.com/cq360767996' },
  { name: 'gitee', title: 'Recovery', url: 'https://gitee.com/cq360' },
];

watch(
  page,
  () => {
    if (zoom && page.value.relativePath !== 'index.md') {
      setTimeout(() => {
        zoom.listen('.prose img');
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

<style>
.theme {
  min-height: calc(100vh - 80px);
}
</style>
