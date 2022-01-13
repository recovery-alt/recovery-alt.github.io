<template>
  <nav class="menu">
    <ul>
      <li
        v-for="item in headers"
        :key="item.slug"
        :title="item.title"
        class="menu-item"
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

<style lang="less" scoped>
.menu {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 2.5rem;
  max-height: 30rem;
  max-width: 15rem;
  overflow-y: auto;

  &-item {
    font-size: 1.167rem;
    list-style: none;
    line-height: 1.8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

@media (max-width: 1200px) {
  .menu {
    display: none;
  }
}
</style>
