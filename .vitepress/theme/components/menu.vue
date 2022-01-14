<template>
  <nav
    class="fixed top-1/2 transform -translate-y-1/2 right-10 max-h-120 max-w-60 overflow-y-auto sm:hidden"
  >
    <ul>
      <li
        v-for="item in headers"
        :key="item.slug"
        :title="item.title"
        class="text-lg list-none overflow-hidden overflow-ellipsis whitespace-nowrap"
        :style="{ paddingLeft: item.level - 2 + 'rem' }"
      >
        <a :href="`#${item.slug}`">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

type Header = { level: number; title: string; slug: string };

const { page } = useData();
const headers = computed<Array<Header>>(() => page.value.headers);
</script>
