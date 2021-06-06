<template>
  <div class="text-xs flex">
    <span v-for="tag in post.tags" :key="tag" class="flex items-center mr-2">
      <img
        class="inline-block mr-1"
        style="margin-top: 0; margin-bottom: 0"
        :src="getIcon(tag)"
        :alt="tag"
      />
      {{ tag }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Post } from '../store';
import { defineProps } from 'vue';

const modules = import.meta.globEager('../../../assets/icon/*.svg');

const getIcon = (name: string) => {
  for (const [key, value] of Object.entries(modules)) {
    if (key.includes(name)) return value.default;
  }
};

defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
});
</script>
