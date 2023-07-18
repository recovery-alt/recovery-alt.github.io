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
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { withBase, isExternal, normalizePath } from '../utils';

const props = defineProps<{ item: Record<string, string> }>();

const route = useRoute();
const classes = computed(() => ({
  active: isActiveLink.value,
  external: isExternalLink.value,
}));
const isActiveLink = computed(() => {
  return normalizePath(withBase(props.item.link)) === normalizePath(route.path);
});
const isExternalLink = computed(() => {
  return isExternal(props.item.link);
});
const href = computed(() => {
  return isExternalLink.value ? props.item.link : withBase(props.item.link);
});
const target = computed(() => {
  if (props.item.target) return props.item.target;

  return isExternalLink.value ? '_blank' : '';
});
const rel = computed(() => {
  if (props.item.rel) return props.item.rel;

  return isExternalLink.value ? 'noopener noreferrer' : '';
});
</script>

<style lang="less" scoped>
.nav-link {
  color: #374151 !important;
}
</style>
