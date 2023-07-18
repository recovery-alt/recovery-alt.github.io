<template>
  <CardPost v-for="post in computedPosts" :key="post.title" :post="post" />
</template>

<script lang="ts" setup>
import { computedPosts } from '../store';
import { useRoute } from 'vitepress';
import CardPost from './card-post.vue';

const route = useRoute();
route.path.replace('/index.html', '/');
</script>
