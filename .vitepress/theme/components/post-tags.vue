<template>
  <div class="text-xs flex">
    <span v-for="tag in post.tags" :key="tag" class="flex items-center mr-2">
      <img class="inline-block mr-1 zoom-exclude" :src="getIcon(tag)" :alt="tag" />
      {{ tag }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { Post } from '../store';

defineProps<{ post: Post }>();

const modules = import.meta.glob('../assets/icon/*.svg', { eager: true });

const getIcon = (name: string) => {
  for (const [key, value] of Object.entries(modules)) {
    if (key.includes(name)) return (value as any).default;
  }
};
</script>
