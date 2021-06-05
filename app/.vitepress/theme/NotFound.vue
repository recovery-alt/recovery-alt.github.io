<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <a :href="siteData.base" aria-label="go to home"> Take me home. </a>
  </div>
</template>

<script lang="ts" setup>
import { useSiteData } from 'vitepress';

const siteData = useSiteData();
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
];

const getMsg = () => msgs[Math.floor(Math.random() * msgs.length)];
</script>
