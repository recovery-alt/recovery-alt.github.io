<template>
  <div
    class="bg-white fixed top-1/2 transform -translate-y-1/2 right-10 max-h-20 max-w-md flex flex-col <lg:hidden"
  >
    <h1 class="p-2 text-xl border-b py-2 mb-2">目录</h1>
    <ul class="px-2 flex-1 overflow-y-auto">
      <li
        v-for="item in headers"
        :key="item.slug"
        :title="item.title"
        class="text-lg overflow-ellipsis whitespace-nowrap overflow-hidden leading-loose"
        :style="{ paddingLeft: item.level - 2 + 'rem' }"
        tabindex="-1"
      >
        <a :href="`#${item.slug}`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

type Header = { level: number; title: string; slug: string };

const { page } = useData();
const headers = computed<Array<Header>>(() => page.value.headers);
</script>
