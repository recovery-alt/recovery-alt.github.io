<template>
  <a
    v-for="item in icons"
    :key="item.url"
    :href="item.url"
    target="_blank"
    class="transition-opacity inline-block opacity-70 hover:opacity-100 mr-5"
    :title="item.title"
  >
    <component :is="item.name" />
  </a>
</template>

<script lang="ts" setup>
import gitee from '../icon/gitee.vue';
import github from '../icon/github.vue';
import juejin from '../icon/juejin.vue';

const icons = [
  { name: juejin, title: 'Juejin: Recovery', url: 'https://juejin.cn/user/1838039174496135' },
  { name: github, title: 'Github: cq360767996', url: 'https://github.com/cq360767996' },
  { name: gitee, title: 'Gitee: cq360', url: 'https://gitee.com/cq360' },
];
</script>
