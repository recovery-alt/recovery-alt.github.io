<template>
  <nav class="menu-box">
    <ul class="menu">
      <li v-for="item in headers" :key="item.slug" :title="item.title" class="menu-item">
        <a :href="`#${item.slug}`">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { usePageData } from 'vitepress';
import { computed } from 'vue';

const page = usePageData();

const headers = computed<Array<{ level: number; title: string; slug: string }>>(
  () => page.value.headers
);
</script>

<style lang="less" scoped>
.menu {
  &-box {
    position: absolute;
    right: 0;
    top: 0;
    max-width: 300px;
  }

  &-item {
  }
}
</style>
