<template>
  <div class="w-full flex items-center justify-between border-b-2 border-gray-100 py-3 md:py-6">
    <div class="relative ml-2 md:ml-0">
      <svg
        class="absolute -left-6 -top-3.5 z-0 transform rotate-45 opacity-20"
        viewBox="0 0 200 200"
        width="80"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#059669"
          d="M50.4,-15.8C59.3,10.9,56.2,42.1,36,58.9C15.9,75.8,-21.4,78.3,-41.8,62.4C-62.2,46.4,-65.8,11.9,-56,-16C-46.2,-43.9,-23.1,-65.4,-1.2,-65C20.8,-64.6,41.5,-42.4,50.4,-15.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <a
        class="relative text-3xl text-green-700 z-10"
        :aria-label="site.title + ', back to home'"
        :href="site.base"
      >
        <span class="font-bold font-header text-green-700">Recovery</span>
      </a>
    </div>
    <div class="flex-grow"></div>
    <NavBarLinks />
  </div>
</template>

<script lang="ts" setup>
import NavBarLinks from './nav-bar-links.vue';
import { useData } from 'vitepress';

const { site } = useData();
</script>
