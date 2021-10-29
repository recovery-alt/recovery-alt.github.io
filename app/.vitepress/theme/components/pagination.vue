<template>
  <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">{{ start }}</span>
        to
        <span class="font-medium">{{ end }}</span>
        of
        <span class="font-medium">{{ page.total }}</span>
        results
      </p>
    </div>
    <div v-if="page.total > page.pageSize">
      <nav class="relative z-0 inline-flex rounded-md shadow-sm" aria-label="Pagination">
        <a
          href="#"
          @click="jumpPage(page.currentPage - 1)"
          :class="{ 'cursor-not-allowed': page.currentPage === 1 }"
          class="
            unstyled
            relative
            inline-flex
            items-center
            px-1
            py-1
            border
            text-sm
            font-medium
            bg-white
            border-gray-300
            text-gray-500
            hover:bg-gray-50
          "
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
        </a>
        <a
          href="#"
          v-for="item in page.totalPage"
          :key="item"
          :class="`unstyled relative inline-flex items-center px-3 py-1 border text-sm font-medium ml-2 ${
            page.currentPage === item
              ? `bg-indigo-50 border-green-500 z-10`
              : `bg-white border-gray-300 hover:bg-gray-50`
          }`"
          @click="jumpPage(item)"
        >
          {{ item }}
        </a>
        <a
          href="#"
          @click="jumpPage(page.currentPage + 1)"
          :class="{ 'cursor-not-allowed': page.currentPage === page.totalPage }"
          class="
            unstyled
            relative
            inline-flex
            items-center
            px-1
            py-1
            border
            text-sm
            font-medium
            ml-2
            bg-white
            border-gray-300
            text-gray-500
            hover:bg-gray-50
          "
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
        </a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { page } from '../store';
import { computed } from 'vue';

const start = computed(() => (page.currentPage - 1) * page.pageSize + 1);
const end = computed(() => {
  const end = page.currentPage * page.pageSize;
  return end > page.total ? page.total : end;
});

const jumpPage = (targetPage: number) => {
  if (page.currentPage !== targetPage && targetPage <= page.totalPage && targetPage >= 1)
    page.currentPage = targetPage;
};
</script>
