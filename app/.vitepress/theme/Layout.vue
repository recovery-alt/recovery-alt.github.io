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
          href="https://github.com/cq360767996"
          target="_blank"
          class="unstyled transition-opacity inline-block opacity-70 hover:opacity-100 mr-5"
          title="Github: Loonpwn"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--c-brand)"
          >
            <title>GitHub icon</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
        <a
          href="https://juejin.cn/user/1838039174496135"
          target="_blank"
          class="unstyled transition-opacity inline-block opacity-70 hover:opacity-100 inline-block"
          title="juejin: Recovery"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 45 38"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Juejin</title>
            <desc>Juejin.cn</desc>
            <defs></defs>
            <g id="0.1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-14" transform="translate(1.000000, 5.000000)" fill="#006CFF">
                <path
                  d="M21.2934328,2.58313049 L18.0173984,0 L14.594624,2.69887801 L14.4172077,2.84182304 L18.0173984,5.71242483 L21.6286578,2.84182304 L21.2934328,2.58313049 Z M33.7078289,12.6006674 L18.0079109,24.980276 L2.31748044,12.6082574 L0,14.4697052 L18.0079109,28.6690167 L36.0256256,14.4621152 L33.7078289,12.6006674 Z M18.0079109,13.6050776 L9.46441554,6.86863505 L7.14661885,8.7300829 L18.0079109,17.2941345 L28.8783742,8.7224929 L26.5605775,6.86104505 L18.0079109,13.6050776 Z"
                  id="Fill-1-Copy"
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <p class="mb-3">© 2021 Recovery, All rights reserved.</p>
    </footer>
    <Debug />
  </div>
</template>

<script lang="ts" setup>
import NavBar from './components/NavBar.vue';
import PostTags from './components/PostTags.vue';
import { inject, computed, watch } from 'vue';
import { postForPath } from './utils';
import { useRoute, usePageData } from 'vitepress';

const zoom = inject<any>('zoom');
const route = useRoute();
const post = computed(() => postForPath(route.path));
const page = usePageData();

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
