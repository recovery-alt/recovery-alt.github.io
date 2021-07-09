<template>
  <div class="nav-item">
    <a
      class="nav-link font-semibold text-gray-700 d-block"
      :class="classes"
      :href="href"
      :target="target"
      :rel="rel"
      :aria-label="item.ariaLabel"
    >
      {{ item.text }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { useRoute } from 'vitepress';
import { withBase, isExternal } from '../utils';

const normalizePath = (path: string) => {
  path = path
    .replace(/#.*$/, '')
    .replace(/\?.*$/, '')
    .replace(/\.html$/, '');
  if (path.endsWith('/')) {
    path += 'index';
  }
  return path;
};

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const item = props.item;
const route = useRoute();
const classes = computed(() => ({
  active: isActiveLink.value,
  external: isExternalLink.value,
}));
const isActiveLink = computed(() => {
  return normalizePath(withBase(item.link)) === normalizePath(route.path);
});
const isExternalLink = computed(() => {
  return isExternal(item.link);
});
const href = computed(() => {
  return isExternalLink.value ? item.link : withBase(item.link);
});
const target = computed(() => {
  if (item.target) return item.target;

  return isExternalLink.value ? '_blank' : '';
});
const rel = computed(() => {
  if (item.rel) return item.rel;

  return isExternalLink.value ? 'noopener noreferrer' : '';
});
</script>

<style lang="less" scoped>
.nav-link {
  color: rgb(55, 65, 81) !important;
}
</style>
