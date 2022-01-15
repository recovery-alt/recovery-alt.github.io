<template>
  <transition name="fade">
    <svg
      v-if="show"
      class="cursor-pointer fixed bottom-8 right-10 w-8 z-1 text-green-700 hover:text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49.484 28.284"
      @click="scrollToTop"
    >
      <g transform="translate(-229 -126.358)">
        <rect
          fill="currentColor"
          width="35"
          height="5"
          rx="2"
          transform="translate(229 151.107) rotate(-45)"
        />
        <rect
          fill="currentColor"
          width="35"
          height="5"
          rx="2"
          transform="translate(274.949 154.642) rotate(-135)"
        />
      </g>
    </svg>
  </transition>
</template>

<script lang="ts" setup>
import debounce from 'lodash/debounce';
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  threshold: {
    type: Number,
    default: 300,
  },
});

const scrollTop = ref<number>();
const show = computed(() => scrollTop.value && scrollTop.value > props.threshold);

const getScrollTop = () =>
  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  scrollTop.value = 0;
};

onMounted(() => {
  scrollTop.value = getScrollTop();
  const setScrollTop = debounce(() => {
    scrollTop.value = getScrollTop();
  }, 100);
  window.addEventListener('scroll', setScrollTop, { passive: true });
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
