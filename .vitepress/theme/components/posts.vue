<template>
  <div v-for="post in posts" :key="post.title" class="group relative mt-8 hover:shadow-lg">
    <div
      class="w-full h-10 -z-10 absolute opacity-0 top-7 bg-[--vp-c-brand] group-hover:-top-1.5 group-hover:opacity-100"
    />
    <a
      class="absolute left-0 top-0 w-full h-full z-10 content"
      :href="post.url"
      :target="post.link ? '_blank' : ''"
    ></a>
    <div class="bg-[--vp-c-mute] z-10 rounded-b-sm">
      <div class="md:p-8 p-4 prose md:prose-xl">
        <div class="pt-0 mb-5">
          <a
            :href="post.url"
            :target="post.link ? '_blank' : ''"
            style="font-weight: bold"
            class="md:text-2xl flex items-center"
          >
            <span v-if="post.link">
              <svg
                class="inline-flex mr-2"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -256 1850 1850"
              >
                <path
                  d="M1438.373 818.95v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19q-26 0-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45q19-19 45-19h512q26 0 45 19t19 45z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>{{ post.title }}</span>
          </a>
        </div>

        <div class="text-xs text-[--vp-c-text-2]">
          <time class="mr-2">{{ post.date }}</time
          ><span v-if="post.readMins">- {{ post.readMins }}min</span>
        </div>

        <div class="text-sm my-4 text-[--vp-c-text-2]">{{ post.description }}</div>

        <div class="text-xs flex">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="flex items-center mr-2 text-[--vp-c-text-2]"
          >
            <div
              class="inline-block mr-1 zoom-exclude w-4 h-4"
              :style="{ backgroundImage: `url(${getIcon(tag)})` }"
            />
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePost } from '../hooks';
import { useRoute } from 'vitepress';

const route = useRoute();
const { posts } = usePost();
route.path.replace('/index.html', '/');

const modules = import.meta.glob('../assets/icon/*.svg', { eager: true });

const getIcon = (name: string) => {
  for (const [key, value] of Object.entries(modules)) {
    if (key.includes(name)) return (value as any).default;
  }
};
</script>
