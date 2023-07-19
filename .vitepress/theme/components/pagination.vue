<template>
  <div v-if="total > pageSize" class="flex-1 flex items-center justify-between">
    <div>
      <p class="text-sm text-[--vp-c-text-2]">
        Showing
        <span :class="leftText">{{ start }}</span>
        to
        <span :class="leftText">{{ end }}</span>
        of
        <span :class="leftText">{{ total }}</span>
        results
      </p>
    </div>
    <nav class="flex items-center justify-center gap-2" aria-label="Pagination">
      <div
        class="item"
        :class="{ 'not-allowed': currentPage === 1 }"
        @click="jumpPage(currentPage - 1)"
      >
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        v-for="item in totalPage"
        :key="item"
        class="item"
        :class="{ 'border border-[--vp-c-brand] text-[--vp-c-brand]': currentPage === item }"
        @click="jumpPage(item)"
      >
        {{ item }}
      </div>
      <div
        class="item"
        :class="{ 'not-allowed': currentPage === totalPage }"
        @click="jumpPage(currentPage + 1)"
      >
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { usePost } from '../hooks';
import { computed } from 'vue';

const leftText = 'font-medium text-[--vp-c-brand]';
const { currentPage, pageSize, total, totalPage } = usePost();
const start = computed(() => (currentPage.value - 1) * pageSize.value + 1);
const end = computed(() => {
  const end = currentPage.value * pageSize.value;
  return end > total.value ? total.value : end;
});

const jumpPage = (targetPage: number) => {
  if (currentPage.value !== targetPage && targetPage <= totalPage.value && targetPage >= 1)
    currentPage.value = targetPage;
};
</script>

<style lang="less" scoped>
.item {
  color: var(--vp-c-text-2);
  @apply relative flex items-center justify-center px-1 py-1
   text-sm font-medium w-8 h-8 shrink-0 rounded-md cursor-pointer hover:text-[--vp-c-brand];

  &.not-allowed {
    @apply cursor-not-allowed;
  }
}
</style>
